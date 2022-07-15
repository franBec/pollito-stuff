import pokemons from './pokemon1stGen'

//prettier-ignore
export default async function handler(req,res){
    const {method, query} = req
    var log = ''
    var errors = []

    switch(method){
        case 'GET':
            try{
                console.log(new Date().toUTCString()+' api/pokemon/index.js -> GET requested! query = '+JSON.stringify(query))
                const name = query.name ?? '' 
                const sort = query.sort ?? ''
                const limit = query.limit ?? 12
                const page = query.page ?? 1
                
                let dataFiltered = pokemons.results.filter((it) => it.name.match(name ? new RegExp(name, 'i') : /.*/))

                switch(sort){
                    case 'id_asc':
                        dataFiltered.sort((a,b)=> Number(a.url.split('/')[6]) - Number(b.url.split('/')[6]))
                        break;
                    case 'id_desc':
                        dataFiltered.sort((a,b)=> Number(b.url.split('/')[6]) - Number(a.url.split('/')[6]))
                        break;
                    case 'az_asc':
                        dataFiltered.sort((a,b)=> a.name.localeCompare(b.name))
                        break;
                    case 'az_desc':
                        dataFiltered.sort((a,b)=> b.name.localeCompare(a.name))
                        break;
                }

                const data = dataFiltered.slice((page-1)*limit, (page)*limit)
                
                //404
                if(!data.length){
                    log = new Date().toUTCString()+' api/pokemon/index.js -> GET error 404: data is null'
                    console.log(log)
                    errors.push(log)
                    return res.status(404).json({
                        success: false,
                        metadata: {
                            total: Number(dataFiltered.length),
                            page: Number(page),
                            limit: Number(limit),
                            totalPages: Math.ceil(dataFiltered.length / limit)
                        },
                        data: []
                    })
                }

                //console.log(new Date().toUTCString()+' api/pokemon/index.js -> GET success 200: data = '+JSON.stringify(data))
                return res.status(200).json({
                    success: true,
                    metadata: {
                        total: Number(dataFiltered.length),
                        page: Number(page),
                        limit: Number(limit),
                        totalPages: Math.ceil(dataFiltered.length / limit)
                    },
                    data: data
                 })

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
