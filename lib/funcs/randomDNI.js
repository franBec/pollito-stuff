import randomInt from "./randomInt"

const randomDNI = (date) =>{
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
        randomInt(-1000, 1000)
      )
}

export default randomDNI