import dbConnect from "../../../lib/dbConnect";
import EnvVar from '../../../models/EnvVar'

export default async function handler(req,res){
    await dbConnect()
    const {method, body, query} = req

    switch(method){
        case 'POST':
            console.log(new Date().toUTCString()+' api/envVar/index.js -> POST error 400: method not supported')
            return res.status(400).json({ success: false })
        case 'GET':
            try{
                console.log(new Date().toUTCString()+' api/envVar/index.js -> GET requested! query = '+JSON.stringify(query))
                const constantName = query.constantName ?? ''
                
                const data = await EnvVar.findOne({key: constantName})
                if(!data){
                    console.log(new Date().toUTCString()+' api/envVar/index.js -> GET error 404: data after find is null')
                    return res.status(404).json({ success: false })
                }

                console.log(new Date().toUTCString()+' api/envVar/index.js -> GET success 200: data = '+JSON.stringify(data))
                return res.status(200).json({ success: true, data: data })

            }catch(error){
                console.log(new Date().toUTCString()+' api/envVar/index.js -> GET error 400: exception = '+error)
                return res.status(400).json({ success: false })
            }
            
        case 'PUT':
            try{
                console.log(new Date().toUTCString()+' api/envVar/index.js -> PUT requested! body = '+JSON.stringify(body))
                const constantName = body.constantName ?? ''
                const newValue = body.newValue ?? ''
                const apiKey = body.apiKey ?? ''
                const keyToMatch = process.env.NEXT_PUBLIC_MAPS_KeyForUpdate_maps_availableAttempts ?? ''

                if(apiKey !== keyToMatch){
                    console.log(new Date().toUTCString()+' api/envVar/index.js -> PUT error 401: Unauthorized')
                    return res.status(401).json({ success: false })
                }
                
                const data = await EnvVar.findOneAndUpdate({key: constantName}, {value: newValue})
                if (!data) {
                    console.log(new Date().toUTCString()+' api/envVar/index.js -> PUT error 404: data after findOneAndUpdate is null')
                    return res.status(404).json({ success: false })
                }
          
                console.log(new Date().toUTCString()+' api/envVar/index.js -> PUT success 200: data = '+JSON.stringify(data))
                return res.status(200).json({ success: true, data: data })

            }catch(error){
                console.log(new Date().toUTCString()+' api/envVar/index.js -> PUT error 400: exception = '+error)
                return res.status(400).json({ success: false })
            }

        case 'DELETE':
            console.log(new Date().toUTCString()+' api/envVar/index.js -> DELETE error 400: method not supported')
            return res.status(400).json({ success: false })
    
        default:
            console.log(new Date().toUTCString()+' api/envVar/index.js -> DEFAULT error 500: the request was not GET POST PUT nor DELETE')
            return res.status(500).json({ success: false })
    }
}