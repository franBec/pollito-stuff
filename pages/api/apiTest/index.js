//prettier-ignore
export default async function handler(req,res){
    const {method, body, query} = req
    var log = ''
    var errors = []

    switch(method){
        case 'GET':
            try{

                return res.status(200).json({ success: true, data: 'hola' })

            }catch(error){
                log = new Date().toUTCString()+' api/envVar/index.js -> GET error 500: exception = '+error.toString()
                console.log(log)
                errors.push(log)
                return res.status(500).json({ success: false , errors: errors})
            }
            
        default:
            log = new Date().toUTCString()+' api/envVar/index.js -> DEFAULT error 405: method not allowed'
            console.log(log)
            errors.push(log)
            return res.status(405).json({ success: false, errors: errors})
    }
}
