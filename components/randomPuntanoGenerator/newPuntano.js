import randomBirthday from "../../lib/funcs/randomBirthday"
import randomDNI from "../../lib/funcs/randomDNI"
import getCUIT from "../../lib/funcs/getCUIT"
import castDateTo_dd_mm_yyyy from "../../lib/funcs/castDateTo_dd_mm_yyyy"
import randomAddress from "../../lib/funcs/randomAddress"
import yn from "yn"

const newPuntano = async(gender, age) =>{
    //go get a first and last name to a database of names
    const results = await Promise.all([
        fetch(`api/randomPuntanoGenerator/firstName?gender=${gender}`),
        fetch('api/randomPuntanoGenerator/lastName')
    ])    
    /*
    Example of data:
    [
    {
        "success": true,
        "data": [
            {
                "_id": "628a84bf9f5ec4e12927d8e5",
                "name": "Ángela",
                "gender": "F"
            }
        ]
    },
    {
        "success": true,
        "data": [
            {
                "_id": "628a88919f5ec4e12927d95a",
                "lastName": "Arribas"
            }
        ]
    }
]
    */
    const data = await Promise.all(results.map(result => result.json()))
    const data_firstName = data[0].data[0].name
    const data_lastName = data[1].data[0].lastName
    const data_gender = data[0].data[0].gender

    /*simulate all the stuff that depends of the age
        birthday = f(age)
        dni = f(birthday)
        cuit = f(dni, gender)
    */
    const birthday = randomBirthday(age)
    const dni = randomDNI(birthday)
    const cuit = getCUIT(dni.toString(), data_gender)

    /* simultate address*/
    const isAddressSimulationEnabled = yn(process.env.NEXT_PUBLIC_RandomPuntanoGenerator_UseMaps)
    let address = ''
    let coords = {}
    let addressError = ''
    if(isAddressSimulationEnabled){
        try{
            const addressData = await randomAddress()
            address = addressData.results[0].formatted_address.split(',')[0] //just the street and number
            coords= addressData.results[0].geometry.location
        }catch(error){
            addressError = error.toString()
        }
    }

    return{
        firstName: data_firstName,
        lastName: data_lastName,
        gender: data_gender,
        age: age,
        birthday: castDateTo_dd_mm_yyyy(birthday),
        dni: dni,
        cuit: cuit,
        address:{
            isAddressSimulationEnabled,
            address,
            coords,
            addressError
        }
    }
    
}
export default newPuntano