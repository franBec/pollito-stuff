import randomBirthday from '../../../lib/funcs/randomBirthday'
import randomDNI from '../../../lib/funcs/randomDNI'
import getCUIT from '../../../lib/funcs/getCUIT'
import yn from 'yn'
import castBirthday from '../../../lib/funcs/castDateTo_dd_mm_yyyy'

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
            
            //check for 403
            if(apiKey !== process.env.NEXT_PUBLIC_UpdateEnvVars_mapsAvailableAttempts){
                log = new Date().toUTCString() + ' api/randomPuntanoGenerator/newPuntano.js -> GET error 403: apiKey is not valid'
                console.log(log)
                errors.push(log)
                return res.status(403).json({ success: false, errors: errors })
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
            const isAddressSimulationEnabled = yn(process.env.NEXT_PUBLIC_RandomPuntanoGenerator_UseMaps)
            let address = ''
            let coords = {}
        
            try{
                const mapApiKey = process.env.NEXT_PUBLIC_mapsApiKey ?? ''
                const resFromRandomAddress = await fetch(`${server}api/randomPuntanoGenerator/randomAddress?mapApiKey=${mapApiKey}&updateEnvVarKey=${apiKey}`)
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
                        birthday: castBirthday(birthday),
                        dni,
                        cuit,
                        address:{
                            isAddressSimulationEnabled,
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
