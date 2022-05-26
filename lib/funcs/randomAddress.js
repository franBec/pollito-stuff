//https://turfjs.org/
import bbox from '@turf/bbox'
import { randomPosition } from '@turf/random'

import yn from 'yn'
const simulateAddress = yn(process.env.NEXT_PUBLIC_RandomPuntanoGeneratorUseMaps)

const checkIfItIncludesStreetAddress = (result) =>{
    return result.types.includes('street_address')
}

const randomAddress = async (polygonPoints) => {
  const key = process.env.NEXT_PUBLIC_API_KEY
  const box = bbox(polygonPoints)
  let count = 0
  let x, y, res, data, desiredResult

  if(!simulateAddress){
    throw new Error('use of randomAddress.js is not allowed by config!')
  }

  while (true) {
    [y, x] = randomPosition(box)
    res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${x}, ${y}&key=${key}`)
    data = await res.json()
    
    if(data.status === 'OK' && data.results.length !== 0){
        desiredResult = data.results.filter(checkIfItIncludesStreetAddress)
        if(desiredResult.length !== 0){
            return desiredResult[0]
        }
    }
    count++
    if(count === 5){
      count=0
      throw new Error('Too many unsuccessfull tries generating a valid random address!')
    }
  }
}

export default randomAddress
