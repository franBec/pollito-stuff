//https://www.npmjs.com/package/yn
import yn from 'yn'

//https://turfjs.org/
import bbox from '@turf/bbox'
import { randomPosition } from '@turf/random'

//https://www.npmjs.com/package/react-geocode
import Geocode from 'react-geocode'

import polygonPoints from '../../components/randomPuntanoGenerator/map/sanLuisGeoJson'

const randomAddress = async () => {

  //check if the use of map is on/off by config
  const simulateAddress = yn(process.env.NEXT_PUBLIC_RandomPuntanoGenerator_UseMaps)
  if(!simulateAddress){
    throw new Error('lib -> funcs-> randomAddress.js: the use of randomAddress.js is not allowed by config!')
  }

  //check if we can update the mongoDb envVars collection on how many attempts are left
  const apiKey = process.env.NEXT_PUBLIC_MAPS_KeyForUpdate_maps_availableAttempts
  if(!apiKey){
    throw new Error('lib -> funcs-> randomAddress.js: failed to obtain the api key used to update the available attempts counter')
  }

  //get from the mongoDb envVars collection how many attempts are left
  let attempts = 0
  try{
    const res = await fetch('api/envVar?constantName=maps_availableAttempts')
    const data = await res.json()
    if(!data.success){
    throw new Error('lib -> funcs-> randomAddress.js: Asking for how many attempts to the API are left was unsuccessful')
    }
    attempts = Number(data.data.value)
  }catch(error){
    throw new Error('lib -> funcs-> randomAddress.js: Something went wrong when asking for how many attempts to the API are left. Error: '+error.toString())
  }

  //let's begin the simulation
  Geocode.setApiKey(process.env.NEXT_PUBLIC_API_KEY)
  Geocode.setLanguage('en')
  Geocode.setRegion('ar')
  Geocode.setLocationType('ROOFTOP')

  const box = bbox(polygonPoints) //invisible box made from the polygonPoints. It is used to make random points
  let x,y //coords

  while(attempts > 0){
    try {
      attempts--
      [y, x] = randomPosition(box)
      const res = await Geocode.fromLatLng(x.toString(), y.toString())
      if(res.status !== 'OK'){
        throw new Error('lib -> funcs-> randomAddress.js: res.status='+res.status)
      }

      //try to update the attempts counter. If fails, just ignore
      try {
        const res = await fetch('/api/envVar', {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            "constantName":"maps_availableAttempts",
            "newValue":attempts,
            "apiKey":apiKey
        }),
        })
      } catch (ignore) {} //do nothing!
      
      return res //good ending!

    } catch (error) {
      //the res obtained does not provide a street name, was probably a point in the middle of a mountain of something, retry!
      console.log('lib -> funcs-> randomAddress.js: Failed attempt simulating an address. Attempts left: '+attempts)
    }
  }

  //run out of attempts. Notify the mongoDb envVars collection about this
  try {
    const res = await fetch('/api/envVar', {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        "constantName":"maps_availableAttempts",
        "newValue":0,
        "apiKey":apiKey
    }),
    })
  } catch (ignore) {} //do nothing!
  throw new Error('lib -> funcs-> randomAddress.js: There are no more attempts available. If you need to keep using the address simulation feature, please contact me!') //bad ending!
}

export default randomAddress
