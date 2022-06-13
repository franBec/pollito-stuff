import dbConnect from '../../../lib/dbConnect'
import PuntanoFirstName from '../../../models/randomPuntanoGenerator/PuntanoFirstName'
import PuntanoLastName from '../../../models/randomPuntanoGenerator/PuntanoLastName'

//prettier-ignore
export default async function handler(req, res) {
    await dbConnect()
    const { method, query } = req
    var log = ''
    var success = true
    var errors = []

    switch (method) {
        case 'GET':
        try {
            console.log(new Date().toUTCString() + ' api/randomPuntanoGenerator/fullNameAndGender.js -> GET requested! query = '+JSON.stringify(query))

            var aggregateArray = [{ $sample: { size: 1 } }]
            var gender = query.gender ?? ''
            if (gender !== 'F' && gender !== 'M') {
                gender = ''
            }
            else {
                aggregateArray.unshift({ $match: { gender: { $eq: gender } } })
            }

            const results = await Promise.allSettled([
                await PuntanoFirstName.aggregate([aggregateArray]),
                await PuntanoLastName.aggregate([{ $sample: { size: 1 } }])
            ])

            var res_firstName = ''
            var res_lastName = ''
            var res_gender = gender

            if(results[0].status === 'fulfilled'){
                res_firstName = results[0]?.value[0]?.name ?? ''
            }
            if(results[1].status === 'fulfilled'){
                res_lastName = results[1]?.value[0]?.lastName ?? ''
            }
            if(results[0].status === 'fulfilled'){
                res_gender = results[0]?.value[0]?.gender ?? gender
            }

            if (!res_firstName) {
                log = new Date().toUTCString() + ' api/randomPuntanoGenerator/fullNameAndGender.js -> GET error 500: firstName is null'
                console.log(log)
                errors.push(log)
                success = false
            }

            if(!res_lastName){
                log = new Date().toUTCString() + ' api/randomPuntanoGenerator/fullNameAndGender.js -> GET error 500: lastName is null'
                console.log(log)
                errors.push(log)
                success = false
            }

            const data = {
                success: success,
                data: {
                    firstName: res_firstName,
                    lastName: res_lastName,
                    gender: res_gender
                },
                errors: errors 
            }

            console.log(new Date().toUTCString() + ' api/randomPuntanoGenerator/fullNameAndGender.js -> GET success 200: ' + JSON.stringify(data))
            return res.status(200).json(data)

        } catch (error) {
            log = new Date().toUTCString() + ' api/randomPuntanoGenerator/fullNameAndGender.js -> GET error 500: exception = ' + error.toString()
            console.log(log)
            errors.push(log)
            return res.status(500).json({ success: false, errors: errors })
        }

        default:
            log = new Date().toUTCString() + ' api/randomPuntanoGenerator/fullNameAndGender.js -> DEFAULT error 405: method not supported'
            console.log(log)
            errors.push(log)
            return res.status(405).json({ success: false, errors: errors })
    }
}
