import { useEffect, useState } from 'react'

import DisplayError from '../_utils/displayError'

import randomBirthday from '../../lib/funcs/randomBirthday'
import randomDNI from '../../lib/funcs/randomDNI'
import getCUIT from '../../lib/funcs/getCUIT'
import castDateTo_dd_mm_yyyy from '../../lib/funcs/castDateTo_dd_mm_yyyy'

import Map from './map/map'
import Mapnt from './map/mapnt'
import sanLuisGeoJson from './map/sanLuisGeoJson'
import randomAddress from '../../lib/funcs/randomAddress'

import yn from 'yn'
const simulateAddress = yn(
  process.env.NEXT_PUBLIC_RandomPuntanoGeneratorUseMaps
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
    //age related stuff
    const ageRelatedStuff = makeAgeRelatedStuff(age)
    setBirthday(castDateTo_dd_mm_yyyy(ageRelatedStuff.birthday))
    setDni(ageRelatedStuff.dni)
    setCuit(ageRelatedStuff.cuit)

    //random address stuff
    if (simulateAddress) {
      randomAddress(sanLuisGeoJson)
        .then((data) => {
          console.log(data)
          setAddress(data.formatted_address.split(',')[0]) //just the street and number
          setMarker(data.geometry.location)
        })
        .catch((error) => setAddressError(error.message))
    }
  }, [triggerUseEffect])

  return (
    <>
      <div className="m-2">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>
          Gender:{' '}
          {gender === 'M' ? 'Male' : gender === 'F' ? 'Female' : 'Indefinite'}
        </p>
        <p>Birthday: {birthday}</p>
        <p>DNI: {dni}</p>
        <p>CUIT: {cuit}</p>
      </div>
      {simulateAddress ? (
        addressError ? (
          <DisplayError errorMessage={addressError} />
        ) : (
          <Map
            address={address}
            markerPosition={marker}
            polygonGeoJson={sanLuisGeoJson}
          />
        )
      ) : (
        <Mapnt />
      )}
    </>
  )
}

export default Puntano
