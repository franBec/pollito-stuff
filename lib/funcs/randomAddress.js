//https://www.npmjs.com/package/yn
import yn from 'yn'

//https://turfjs.org/
import bbox from '@turf/bbox'
import { randomPosition } from '@turf/random'

//https://www.npmjs.com/package/react-geocode
import Geocode from 'react-geocode'

import polygonPoints from '../../components/randomPuntanoGenerator/map/sanLuisGeoJson'

const randomAddress = async () => {
  const simulateAddress = yn(process.env.NEXT_PUBLIC_RandomPuntanoGenerator_UseMaps)
  if(!simulateAddress){
    throw new Error('lib -> funcs-> randomAddress.js: the use of randomAddress.js is not allowed by config!')
  }

  Geocode.setApiKey(process.env.NEXT_PUBLIC_API_KEY)
  Geocode.setLanguage('en')
  Geocode.setRegion('ar')
  Geocode.setLocationType('ROOFTOP')

  const box = bbox(polygonPoints) //invisible box made from the polygonPoints. It is used to make random points
  let x,y //coords

  let attempts = Number(process.env.NEXT_PUBLIC_RandomPuntanoGenerator_AddressSimulationAttempts) ?? 3 //max ammount of attempts

  while(attempts > 0){
    try {
      [y, x] = randomPosition(box)
      const res = await Geocode.fromLatLng(x.toString(), y.toString())
      if(res.status !== 'OK'){
        throw new Error('lib -> funcs-> randomAddress.js: res.status='+res.status)
      }
    
      return res
    } catch (error) {
      console.log('lib -> funcs-> randomAddress.js: Failed attempt simulating an address. Attempts left:'+attempts)
      attempts--
    }
  }

  throw new Error('lib -> funcs-> randomAddress.js: Too many unsuccessful attempts')
}

export default randomAddress
