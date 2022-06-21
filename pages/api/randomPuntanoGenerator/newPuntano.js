import randomBirthday from '../../../lib/funcs/randomBirthday'
import randomDNI from '../../../lib/funcs/randomDNI'
import getCUIT from '../../../lib/funcs/getCUIT'

import { server } from '../../../lib/server'

//prettier-ignore
export default async function handler(req, res){
    const { method, query } = req
    var log = ''
    var errors = []
    var success = true

    switch(method){
        case 'GET':
        try{
            console.log(new Date().toUTCString() + ' api/randomPuntanoGenerator/newPuntano.js -> GET requested! query = '+JSON.stringify(query))
            
            var gender = query.gender ?? ''
            var age = query.age ?? 18
            var apiKey = query.apiKey ?? ''

            //check for 400
            if(!apiKey){
                log = new Date().toUTCString() + ' api/randomPuntanoGenerator/newPuntano.js -> GET error 400: apiKey is null'
                console.log(log)
                errors.push(log)
                return res.status(400).json({ success: false, errors: errors })
            }

            //check if apiKey===password123
            if(apiKey==='password123'){
            //returns the sample address, a place where I used to live
                return res
                .status(200)
                .json({
                    success: true,
                    errors: [new Date().toUTCString()+' This is a sample Puntano (notice the birthday is the current date). To really get a random Puntano, you need a valid apiKey. If you want one, contact me linkedin.com/in/franco-becvort/'],
                    data: {
                        firstName: "Juan",
                        lastName: "Pérez",
                        gender: "M",
                        age: 18,
                        birthday: new Date().toISOString(),
                        dni: 99999999,
                        cuit: "99999999999",
                        address: {
                            address: "Estado de Israel 1472",
                            coords: {
                                lat: -33.2925125,
                                lng: -66.3386712
                            }
                        }
                    }
                })
            }

            //check for 403
            if(apiKey !== process.env.NEXT_PUBLIC_NewPuntano_apiKey){
                log = new Date().toUTCString() + ' api/randomPuntanoGenerator/newPuntano.js -> GET error 403: apiKey is not valid'
                console.log(log)
                errors.push(log)
                return res.status(403).json({ success: false, errors: errors })
            }

            //age control
            if(isNaN(Number(age)) || Number(age)<1 || Number(age)>80){
                log = new Date().toUTCString() + ' api/randomPuntanoGenerator/newPuntano.js -> GET error 400: age is not a valid value (a number between 1 and 80). Defaulting to age=18'
                console.log(log)
                errors.push(log)
                age = 18
            }

            var res_firstName = ''
            var res_lastName = ''
            var res_gender = ''
        
            //full name and gender
            try{
                const resFromFullNameAndGender = await fetch(`${server}api/randomPuntanoGenerator/fullNameAndGender?gender=${gender}`)
                const resjson = await resFromFullNameAndGender.json()
                if(!resjson.success){
                    log = new Date().toUTCString() + ` api/randomPuntanoGenerator/newPuntano.js -> success was false after fetching ${server}api/randomPuntanoGenerator/fullNameAndGender?gender=${gender}`
                    console.log(log)
                    errors = errors.concat(resjson.errors)
                    errors.push(log)
                    success = false
                }
                else{
                    res_firstName = resjson.data?.firstName ?? ''
                    res_lastName = resjson.data?.lastName ?? ''
                    res_gender = resjson.data?.gender ?? gender
                }
            }catch(error){
                log = new Date().toUTCString() + ` api/randomPuntanoGenerator/newPuntano.js -> something happened fecthing ${server}api/randomPuntanoGenerator/fullNameAndGender?gender=${gender} - Error: `+error.toString()
                console.log(log)
                errors.push(log)
                success=false
            }
        
            /*simulate all the stuff that depends of the age
                birthday = f(age)
                dni = f(birthday)
                cuit = f(dni, gender)
            */
            const birthday = randomBirthday(age)
            const dni = randomDNI(birthday)
            const cuit = getCUIT(dni.toString(), res_gender)
        
            //simultate address
            let address = ''
            let coords = {}
        
            try{
                const resFromRandomAddress = await fetch(`${server}api/randomPuntanoGenerator/randomAddress?apiKey=${process.env.NEXT_PUBLIC_RandomAddress_apiKey}`)
                const resjson = await resFromRandomAddress.json()
                if(!resjson.success){
                    log = new Date().toUTCString() + ` api/randomPuntanoGenerator/newPuntano.js -> success was false after fetching ${server}api/randomPuntanoGenerator/randomAddress`
                    console.log(log)
                    errors.push(log)
                    success = false
                }
                else{
                    address = resjson.data.address
                    coords = resjson.data.coords
                }
                errors = errors.concat(resjson.errors)
            }catch(error){
                log = new Date().toUTCString() + ` api/randomPuntanoGenerator/newPuntano.js -> something happened fecthing ${server}api/randomPuntanoGenerator/randomAddress - Error: `+error.toString()
                console.log(log)
                errors.push(log)
                success=false
            }

            return res
                .status(200)
                .json({
                    success,
                    errors,
                    data:{
                        firstName: res_firstName,
                        lastName: res_lastName,
                        gender: res_gender,
                        age,
                        birthday,
                        dni,
                        cuit,
                        address:{
                            address,
                            coords,
                        },
                    }
                })
        }catch(error){
            log = new Date().toUTCString() + ' api/randomPuntanoGenerator/newPuntano.js -> GET error 500: exception = ' + error.toString()
            console.log(log)
            errors.push(log)
            return res.status(500).json({ success: false, errors: errors })
        }
            
        default:
            log = new Date().toUTCString() + ' api/randomPuntanoGenerator/newPuntano.js -> DEFAULT error 405: method not supported'
            console.log(log)
            errors.push(log)
            return res.status(405).json({ success: false, errors: errors })
    }
}
