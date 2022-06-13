//https://www.npmjs.com/package/yn
import yn from 'yn'

//https://turfjs.org/
import bbox from '@turf/bbox'
import { randomPosition } from '@turf/random'

//https://www.npmjs.com/package/react-geocode
import Geocode from 'react-geocode'

import polygonPoints from '../../../components/randomPuntanoGenerator/map/sanLuisGeoJson'

import { server } from '../../../lib/server'

//prettier-ignore
export default async function handler(req, res){
  const { method, query } = req
  var log = ''
  var errors = []
  
  switch (method) {
    case 'GET':
    try {
        console.log(new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET requested! query = '+JSON.stringify(query))
        
        //check if 503: randomAddress is off
        const simulateAddress = yn(process.env.NEXT_PUBLIC_RandomPuntanoGenerator_UseMaps)
        if(!simulateAddress){
          log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET error 503: Pollito turned off the use of randomAddress.js'
          console.log(log)
          errors.push(log)
          return res.status(503).json({ success: false, errors: errors })
        }

        //check if 400
        const mapApiKey = query.mapApiKey ?? ''
        const updateEnvVarKey = query.updateEnvVarKey ?? ''
        if(!mapApiKey){
          log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET error 400: mapApiKey is null'
          console.log(log)
          errors.push(log)
          return res.status(400).json({ success: false, errors: errors })
        }
        if(!updateEnvVarKey){
          log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET error 400: updateEnvVarKey is null'
          console.log(log)
          errors.push(log)
          return res.status(400).json({ success: false, errors: errors })
        }

        //check if 403
        if(mapApiKey !== process.env.NEXT_PUBLIC_mapsApiKey){
          log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET error 403: mapApiKey is not valid'
          console.log(log)
          errors.push(log)
          return res.status(403).json({ success: false, errors: errors })
        }
        if(updateEnvVarKey !== process.env.NEXT_PUBLIC_UpdateEnvVars_mapsAvailableAttempts){
          log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET error 403: updateEnvVarKey is not valid'
          console.log(log)
          errors.push(log)
          return res.status(403).json({ success: false, errors: errors })
        }

        //get from the mongoDb envVars collection how many attempts are left
        let attempts
        try{
          const resFromEnvVar = await fetch(`${server}api/envVar?envVar=maps_availableAttempts`)
          const data = await resFromEnvVar.json()
          if(!data.success){
            log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET error 500: Asking for how many attempts to the API are left was unsuccessful'
            console.log(log)
            errors = errors.concat(data.errors)
            errors.push(log)
            return res.status(500).json({ success: false, errors: errors })
          }

          attempts = Number(data.data)
          console.log(new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> attempts = '+attempts)
        
        }catch(error){
          log = new Date().toUTCString() + ` api/randomPuntanoGenerator/randomAddress.js -> GET error 500: Sommething happened fetching ${server}api/envVar?envVar=maps_availableAttempts - Exception = `+error.toString()
          console.log(log)
          errors.push(log)
          return res.status(500).json({ success: false, errors: errors })
        }

        //if attempts === 0, we 503 it
        if(attempts === 0){
          log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET success 503: There are no more attempts available. If you need to keep using the address simulation feature, please contact me! ~Pollito'
          console.log(log)
          errors.push(log)
          return res.status(503).json({ success: false, errors: errors })
        }

        //let's begin the simulation
        Geocode.setApiKey(mapApiKey)
        Geocode.setLanguage('en')
        Geocode.setRegion('ar')
        Geocode.setLocationType('ROOFTOP')
      
        const box = bbox(polygonPoints) //invisible box made from the polygonPoints. It is used to make random points
        let x,y                         //coords
      
        while(attempts > 0){
          try {
            attempts--
            [y, x] = randomPosition(box)                                                  //generate random coords inside the invisible box
            const resFromGeocode = await Geocode.fromLatLng(x.toString(), y.toString())   //get the address of the coords
            if(resFromGeocode.status === 'OK'){
              //good ending!

              //update attempts
              try {
                const resFromEnvVar = await fetch(`${server}api/envVar`, {
                  method: 'PUT',
                  headers: { 'Content-type': 'application/json' },
                  body: JSON.stringify({
                    "envVar":"maps_availableAttempts",
                    "newValue":attempts,
                    "apiKey":updateEnvVarKey
                  }),
                })
                const data = await resFromEnvVar.json()
                if(!data.success){
                  log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> success was false when trying to update the attempts in the good ending'
                  console.log(log)
                  errors = errors.concat(data.errors)
                  errors.push(log)
                }
              } catch (error) {
                log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> something happened trying to update the attempts in the good ending - Error: '+error.toString()
                console.log(log)
                errors.push(log)
              }
              //return
              const address = resFromGeocode.results[0].formatted_address.split(',')[0]
              const coords = resFromGeocode.results[0].geometry.location
              console.log(new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET success 200: data = '+JSON.stringify(address)+' - '+JSON.stringify(coords))
              return res
                .status(200)
                .json({
                  success: true,
                  data: {address, coords},
                  errors: errors
                })
            }
          } catch (error) {
            log = new Date().toUTCString() + ` api/randomPuntanoGenerator/randomAddress.js -> obtaining street address from Geocode.fromLatLng(${x}, ${y}) was not OK. Probably was a point in a middle of nowhere. Attempts left: ${attempts}. Retrying...`
            console.log(log)
            errors.push(log)
          }
        }

        //we run out of attempts
        log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET success 503: There are no more attempts available. If you need to keep using the address simulation feature, please contact me! ~Pollito'
        console.log(log)
        errors.push(log)

        try {
          const resFromEnvVar = await fetch(`${server}api/envVar`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
              "envVar":"maps_availableAttempts",
              "newValue":"0",
              "apiKey":updateEnvVarKey
            }),
          })
          const data = await resFromEnvVar.json()
          if(!data.success){
            log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> success was false when trying to update the attempts to 0'
            console.log(log)
            errors = errors.concat(data.errors)
            errors.push(log)
          }
        } catch (error) {
          log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> something happened trying to update the attempts to 0 - Error: '+error.toString()
          console.log(log)
          errors.push(log)
        }

        return res.status(503).json({ success: false, errors: errors})

    } catch (error) {
        log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> GET error 500: exception = ' + error.toString()
        console.log(log)
        errors.push(log)
        return res.status(500).json({ success: false, errors: errors })
    }

    default:
        log = new Date().toUTCString() + ' api/randomPuntanoGenerator/randomAddress.js -> DEFAULT error 405: method not supported'
        console.log(log)
        errors.push(log)
        return res.status(405).json({ success: false, errors: errors })
  }  
}
