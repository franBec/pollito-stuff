import { useEffect, useState } from 'react'

import randomBirthday from '../../lib/funcs/randomBirthday'
import randomDNI from '../../lib/funcs/randomDNI'
import getCUIT from '../../lib/funcs/getCUIT'
import castDateTo_dd_mm_yyyy from '../../lib/funcs/castDateTo_dd_mm_yyyy'

import randomAddress from '../../lib/funcs/randomAddress'

//https://www.npmjs.com/package/yn
import yn from 'yn'

import PuntanoInfo from './puntanoInfo'

import DisplayError from '../_utils/displayError'

import Map from './map/map'
import Mapnt from './map/mapnt'

const simulateAddress = yn(
  process.env.NEXT_PUBLIC_RandomPuntanoGenerator_UseMaps
)

const Puntano = ({ firstName, lastName, gender, age, triggerUseEffect }) => {
  /*
   * Birthday, dni, & cuit management
    birthday = f(age)
    dni = f(birthday)
    cuit = f(dni, gender)
   */
  const [birthday, setBirthday] = useState('')
  const [dni, setDni] = useState(0)
  const [cuit, setCuit] = useState(0)

  const makeAgeRelatedStuff = () => {
    const birthday = randomBirthday(age)
    const dni = randomDNI(birthday)
    const cuit = getCUIT(dni.toString(), gender)

    return { birthday: birthday, dni: dni, cuit: cuit }
  }

  /*
   * Random address management
    defaults to San Luis main square
   */
  const [address, setAddress] = useState('PLAZA PRINGLES')
  const [marker, setMarker] = useState({
    // San Luis main square
    lat: -33.30213,
    lng: -66.33692,
  })
  const [addressError, setAddressError] = useState('')

  /*
  *useEffect
    -trigger a new simultation of age related stuff: birthday, dni, & cuit
    -create a random point that is located in Ciudad de San Luis
  */
  useEffect(() => {
    const fetchData = async () => {
      //age related stuff
      const ageRelatedStuff = makeAgeRelatedStuff(age)
      setBirthday(castDateTo_dd_mm_yyyy(ageRelatedStuff.birthday))
      setDni(ageRelatedStuff.dni)
      setCuit(ageRelatedStuff.cuit)

      //random address stuff
      if (simulateAddress) {
        try {
          const data = await randomAddress()
          setAddress(data.results[0].formatted_address.split(',')[0]) //just the street and number
          setMarker(data.results[0].geometry.location)
        } catch (error) {
          setAddressError(error.toString())
        }
      }
    }
    fetchData()
  }, [triggerUseEffect])

  return (
    <>
      <div className="my-2">
        <div className="mx-auto w-fit">
          <PuntanoInfo k={'NAME'} v={firstName + ' ' + lastName} />
          <PuntanoInfo
            k={'GENDER'}
            v={
              gender === 'M' ? 'Male' : gender === 'F' ? 'Female' : 'Indefinite'
            }
          />
          <PuntanoInfo k={'BIRTHDAY'} v={birthday} />
          <PuntanoInfo k={'DNI'} v={dni} />
          <PuntanoInfo k={'CUIT'} v={cuit} />
          {simulateAddress ? (
            addressError ? (
              <DisplayError errorMessage={addressError} />
            ) : (
              <>
                <PuntanoInfo k={'ADDRESS'} v={address} />
                <Map markerPosition={marker} />
              </>
            )
          ) : (
            <Mapnt />
          )}
        </div>
      </div>
    </>
  )
}

export default Puntano
