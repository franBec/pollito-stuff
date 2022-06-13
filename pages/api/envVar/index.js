import dbConnect from '../../../lib/dbConnect'
import EnvVar from '../../../models/EnvVar'

//prettier-ignore
export default async function handler(req,res){
    await dbConnect()
    const {method, body, query} = req
    var log = ''
    var errors = []

    switch(method){
        case 'GET':
            try{
                console.log(new Date().toUTCString()+' api/envVar/index.js -> GET requested! query = '+JSON.stringify(query))
                const envVar = query.envVar ?? ''

                //check if 400
                if(!envVar){
                    log = new Date().toUTCString() + ' api/envVar/index.js -> GET error 400: envVar is null'
                    console.log(log)
                    errors.push(log)
                    return res.status(400).json({ success: false, errors: errors })
                }
                
                const data = await EnvVar.findOne({key: envVar})
                if(!data){
                    log = new Date().toUTCString()+' api/envVar/index.js -> GET error 404: data is null'
                    console.log(log)
                    errors.push(log)
                    return res.status(404).json({ success: false, errors: errors })
                }

                console.log(new Date().toUTCString()+' api/envVar/index.js -> GET success 200: data = '+JSON.stringify(data))
                return res.status(200).json({ success: true, data: data.value })

            }catch(error){
                log = new Date().toUTCString()+' api/envVar/index.js -> GET error 500: exception = '+error.toString()
                console.log(log)
                errors.push(log)
                return res.status(500).json({ success: false , errors: errors})
            }
            
        case 'PUT':
            try{
                console.log(new Date().toUTCString()+' api/envVar/index.js -> PUT requested! body = '+JSON.stringify(body))
                const envVar = body.envVar ?? ''
                const newValue = body.newValue ?? ''
                const apiKey = body.apiKey ?? ''
                
                //check if 400
                if(!envVar){
                    log = new Date().toUTCString() + ' api/envVar/index.js -> PUT error 400: envVar is null'
                    console.log(log)
                    errors.push(log)
                    return res.status(400).json({ success: false, errors: errors })
                }

                if(!newValue){
                    log = new Date().toUTCString() + ' api/envVar/index.js -> PUT error 400: newValue is null'
                    console.log(log)
                    errors.push(log)
                    return res.status(400).json({ success: false, errors: errors })
                }

                if(!apiKey){
                    log = new Date().toUTCString() + ' api/envVar/index.js -> PUT error 400: apiKey is null'
                    console.log(log)
                    errors.push(log)
                    return res.status(400).json({ success: false, errors: errors })
                }
                
                //check if 403
                if(apiKey !== process.env.NEXT_PUBLIC_UpdateEnvVars_mapsAvailableAttempts){
                    log = new Date().toUTCString()+' api/envVar/index.js -> PUT error 403: apiKey is not valid'
                    console.log(log)
                    errors.push(log)
                    return res.status(403).json({ success: false, errors: errors })
                }
                
                //update the envVar
                const data = await EnvVar.findOneAndUpdate({key: envVar}, {value: newValue}, {new: true})
                if (!data) {
                    log = new Date().toUTCString()+' api/envVar/index.js -> PUT error 404: data is null'
                    console.log(log)
                    errors.push(log)
                    return res.status(404).json({ success: false, errors: errors })
                }
          
                console.log(new Date().toUTCString()+' api/envVar/index.js -> PUT success 201: data = '+JSON.stringify(data))
                return res.status(201).json({ success: true })

            }catch(error){
                log = new Date().toUTCString()+' api/envVar/index.js -> PUT error 500: exception = '+error.toString()
                console.log(log)
                errors.push(log)
                return res.status(500).json({ success: false, errors: errors })
            }
    
        default:
            log = new Date().toUTCString()+' api/envVar/index.js -> DEFAULT error 405: method not allowed'
            console.log(log)
            errors.push(log)
            return res.status(405).json({ success: false, errors: errors})
    }
}
