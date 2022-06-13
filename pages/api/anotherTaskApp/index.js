import dbConnect from '../../../lib/dbConnect'
import Task from '../../../models/anotherTaskApp/Task'

//prettier-ignore
export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req
  var log = ''

  switch (method) {
    //CRUD [C]reate
    case 'POST':
      try {
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> POST requested! body = '+JSON.stringify(body))

        const data = new Task(body)
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> POST: data = '+JSON.stringify(data))

        await data.save()
        if (!data) {
          log = new Date().toUTCString()+' api/anotherTaskApp/index.js 404 -> POST error 404: data is null'
          console.log(log)
          return res.status(404).json({ success: false, errors: [log] })
        }

        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> POST success 201: data = '+JSON.stringify(data))
        return res.status(201).json({ success: true, data: data })

      } catch (error) {
        log = new Date().toUTCString()+' api/anotherTaskApp/index.js -> POST error 500: exception = '+error
        console.log(log)
        return res.status(500).json({ success: false, errors: [log] })
      }

    //CRUD [R]ead
    case 'GET':
      try {
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> GET requested! query = '+JSON.stringify(query))

        const page = query.page ?? 1 //defaults to first page
        const limit = query.limit ?? 5 //defaults to 5 per page

        //defaults to createdAt asc
        const orderBy = query.orderBy ?? 'createdAt'
        const sort = query.sort ?? ''
        const sortObject = { [orderBy]: sort === 'desc' ? -1 : 1 }

        const data = await Task.paginate({}, { limit, page, sort: sortObject })
        if (!data) {
          log = new Date().toUTCString()+' api/anotherTaskApp/index.js -> GET error 404: data is null'
          console.log(log)
          return res.status(404).json({ success: false, errors: [log]})
        }

        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> GET success 200: data = '+JSON.stringify(data))
        return res.status(200).json({ success: true, data: data })

      } catch (error) {
        log = new Date().toUTCString()+' api/anotherTaskApp/index.js -> GET error 500: exception = '+error
        console.log(log)
        return res.status(500).json({ success: false, errors: [log] })
      }

    //CRUD [U]pdate
    case 'PUT':
      try {
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> PUT requested! body = '+JSON.stringify(body))
        const data = await Task.findByIdAndUpdate(
          body._id,
          {
            text: body.text,
            description: body.description,
            reminder: body.reminder,
          },
          {
            new: true,
            runValidators: true,
          }
        )

        if (!data) {
          log = new Date().toUTCString()+' api/anotherTaskApp/index.js -> PUT error 404: data is null'
          console.log(log)
          return res.status(404).json({ success: false, errors: [log] })
        }

        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> PUT success 201: data = '+JSON.stringify(data))
        return res.status(201).json({ success: true, data: data })

      } catch (error) {
        log = new Date().toUTCString()+' api/anotherTaskApp/index.js -> PUT error 500: exception = '+error
        console.log(log)
        return res.status(500).json({ success: false, errors: [log] })
      }

    //CRUD [D]elete
    case 'DELETE':
      try {
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> DELETE requested! body = '+JSON.stringify(body))
        const data = await Task.findByIdAndDelete(body)

        if (!data) {
          log = new Date().toUTCString()+' api/anotherTaskApp/index.js -> DELETE error 404: data is null'
          console.log(log)
          return res.status(404).json({ success: false, errors: [log] })
        }

        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> DELETE success 200: data = '+JSON.stringify(data))
        return res.status(200).json({ success: true, data: data })

      } catch (error) {
        log = new Date().toUTCString()+' api/anotherTaskApp/index.js -> DELETE error 500: exception = '+error
        console.log(log)
        return res.status(500).json({ success: false, errors: [log] })
      }

    default:
      log = new Date().toUTCString()+' api/anotherTaskApp/index.js -> DEFAULT error 405: method not supported'
      console.log(log)
      return res.status(405).json({ success: false , errors: [log]})
  }
}
