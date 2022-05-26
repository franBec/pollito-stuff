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

  export default getCUIT