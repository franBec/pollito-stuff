import dbConnect from '../../../lib/dbConnect'
import PuntanoLastName from '../../../models/PuntanoLastName'

export default async function handler(req, res) {
  await dbConnect()
  const { method } = req

  //this api will only provide answer to GET method
  //Any other method will res 400

  switch (method) {
    //CRUD [C]reate
    case 'POST':
      console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/lastName.js -> POST error 400: method not supported')
      return res.status(400).json({ success: false })

    //CRUD [R]ead
    case 'GET':
      try {
        console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/lastName.js -> GET requested!')
        const data = await PuntanoLastName.aggregate([{ $sample: { size: 1 } }])

        if (!data) {
          console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/lastName.js -> GET error 404: data after aggregate is null')
          return res.status(404).json({ success: false })
        }

        console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/lastName.js -> GET success 200: data = '+JSON.stringify(data))
        return res.status(200).json({ success: true, data: data })

      } catch (error) {
        console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/lastName.js -> GET error 400: exception = '+error)
        return res.status(400).json({ success: false })
      }

    //CRUD [U]pdate
    case 'PUT':
      console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/lastName.js -> PUT error 400: method not supported')
      return res.status(400).json({ success: false })

    //CRUD [D]elete
    case 'DELETE':
      console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/lastName.js -> DELETE error 400: method not supported')
      return res.status(400).json({ success: false })

    default:
      console.log(new Date().toUTCString()+' api/randomPuntanoGenerator/lastName.js -> DEFAULT error 500: the request was not GET POST PUT nor DELETE')
      return res.status(500).json({ success: false })
  }
}
