import dbConnect from '../../../lib/dbConnect'
import PuntanoFirstName from '../../../models/PuntanoFirstName'

export default async function handler(req, res) {
  await dbConnect()
  const { method, query } = req

  //this api will only provide answer to GET method
  //Any other method will res 400

  switch (method) {
    //CRUD [C]reate
    case 'POST':
      console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/firstName.js -> POST error 400: method not supported')
      return res.status(400).json({ success: false })

    //CRUD [R]ead
    case 'GET':
      try {
        console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/firstName.js -> GET requested! query = '+JSON.stringify(query))

        //if gender is not 'F' nor 'M', will pick random without caring about gender
        var aggregateArray = [{ $sample: { size: 1 } }]
        var gender = query.gender ?? ''
        if(gender !== 'F' && gender !== 'M'){
            gender = ''
        }
        else{
            aggregateArray.unshift({ $match: { gender: { $eq: gender } } })
        }

        const data = await PuntanoFirstName.aggregate([aggregateArray])

        if (!data) {
          console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/firstName.js -> GET error 404: data after aggregate is null')
          return res.status(404).json({ success: false })
        }

        console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/firstName.js -> GET success 200: data = '+JSON.stringify(data))
        return res.status(200).json({ success: true, data: data })

      } catch (error) {
        console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/firstName.js -> GET error 400: exception = '+error)
        return res.status(400).json({ success: false })
      }

    //CRUD [U]pdate
    case 'PUT':
      console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/firstName.js -> PUT error 400: method not supported')
      return res.status(400).json({ success: false })

    //CRUD [D]elete
    case 'DELETE':
      console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/firstName.js -> DELETE error 400: method not supported')
      return res.status(400).json({ success: false })

    default:
      console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/firstName.js -> DEFAULT error 500: the request was not GET POST PUT nor DELETE')
      return res.status(500).json({ success: false })
  }
}
