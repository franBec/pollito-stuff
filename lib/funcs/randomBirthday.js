import randomInt from "./randomInt"

const randomBirthday = (age) => {
    var date = new Date()
    date.setFullYear(date.getFullYear() - age)
    date.setDate(date.getDate() - randomInt(0, 364))
    return date
}

export default randomBirthday