import { useEffect, useState } from 'react'

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

  //aux foo: random number
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  //aux foo: make up a random birthday given the age
  function randomBirthday(age) {
    var date = new Date()
    date.setFullYear(date.getFullYear() - age)
    date.setDate(date.getDate() - randomIntFromInterval(0, 364))
    return date
  }

  //aux foo: cast date to dd/mm/yyyy format
  function castDateTo_dd_mm_yyyy(date) {
    var dd = String(date.getDate()).padStart(2, '0')
    var mm = String(date.getMonth() + 1).padStart(2, '0')
    var yyyy = String(date.getFullYear())
    return dd + '/' + mm + '/' + yyyy
  }

  //aux foo: make up a random DNI given the year
  function randomDNI(date) {
    /*
    this is a very awful estimation. Lets say
      -2k babies are born a day
      -my ID is 41.809.xxx, I was born April 8th 1999
     */

    var baseDate = new Date(1999, 4, 8)
    var difference = (date.getTime() - baseDate.getTime()) / (1000 * 3600 * 24)
    //for extra randomness, add a random number between -1000 and 1000
    return (
      41809000 +
      Math.floor(2000 * difference) +
      randomIntFromInterval(-1000, 1000)
    )
  }

  //aux foo: calculate CUIL from DNI
  //NOT MINE: taken from https://gist.github.com/sturmenta/71b54cd79b260237f83720ddb8e11a6b
  const getCUIT = (dni, gender = 'M') => {
    if (!dni || dni.length !== 8) {
      throw new Error('The DNI number must contain 8 numbers')
    }

    let genderNumber = gender === 'M' ? 20 : 27

    const generateDigitVerificator = () => {
      const multipliers = [2, 3, 4, 5, 6, 7]
      const genderNumberAndDNI = `${genderNumber}${dni}`

      let total = 0
      let multipliersIndex = 0
      for (let i = String(genderNumberAndDNI).length - 1; i > -1; i--) {
        const sum = genderNumberAndDNI[i] * multipliers[multipliersIndex]
        total += sum
        if (multipliersIndex === 5) multipliersIndex = 0
        else multipliersIndex += 1
      }

      const digitVerificator = 11 - (total % 11)

      if (digitVerificator === 10) {
        genderNumber = 23
        return generateDigitVerificator()
      }
      if (digitVerificator === 11) return 0
      return digitVerificator
    }

    const digitVerificator = generateDigitVerificator()

    return `${genderNumber}${dni}${digitVerificator}`
  }

  const makeAgeRelatedStuff = () => {
    const birthday = randomBirthday(age)
    const dni = randomDNI(birthday)
    const cuit = getCUIT(dni.toString(), gender)

    return { birthday: birthday, dni: dni, cuit: cuit }
  }

  /*
  *useEffect
  trigger a resimulation of birthday, dni, & cuit
  */
  useEffect(() => {
    const ageRelatedStuff = makeAgeRelatedStuff(age)
    setBirthday(castDateTo_dd_mm_yyyy(ageRelatedStuff.birthday))
    setDni(ageRelatedStuff.dni)
    setCuit(ageRelatedStuff.cuit)
  }, [triggerUseEffect])

  return (
    <>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>
        Gender:{' '}
        {gender === 'M' ? 'Male' : gender === 'F' ? 'Female' : 'Indefinite'}
      </p>
      <p>Birthday: {birthday}</p>
      <p>DNI: {dni}</p>
      <p>CUIT: {cuit}</p>
    </>
  )
}

export default Puntano
