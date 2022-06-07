import dbConnect from '../../../lib/dbConnect'
import Task from '../../../models/anotherTaskApp/Task'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req

  switch (method) {
    //CRUD [C]reate
    case 'POST':
      try {
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> POST requested! body = '+JSON.stringify(body))

        const data = new Task(body)
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> POST: data = '+JSON.stringify(data))

        await data.save()
        if (!data) {
          console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js 404 -> POST error 404: data after save is null')
          return res.status(404).json({ success: false })
        }

        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> POST success 200: data = '+JSON.stringify(data))
        return res.status(200).json({ success: true, data: data })

      } catch (error) {
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> POST error 400: exception = '+error)
        return res.status(400).json({ success: false })
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
          console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> GET error 404: data after paginate is null')
          return res.status(404).json({ success: false })
        }

        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> GET success 200: data = '+JSON.stringify(data))
        return res.status(200).json({ success: true, data: data })

      } catch (error) {
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> GET error 400: exception = '+error)
        return res.status(400).json({ success: false })
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
          console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> PUT error 404: data after findByIdAndUpdate is null')
          return res.status(404).json({ success: false })
        }

        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> PUT success 200: data = '+JSON.stringify(data))
        return res.status(200).json({ success: true, data: data })

      } catch (error) {
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> PUT error 400: exception = '+error)
        return res.status(400).json({ success: false })
      }

    //CRUD [D]elete
    case 'DELETE':
      try {
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> DELETE requested! body = '+JSON.stringify(body))
        const data = await Task.findByIdAndDelete(body)

        if (!data) {
          console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> DELETE error 404: data after findByIdAndDelete is null')
          return res.status(404).json({ success: false })
        }

        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> DELETE success 200: data = '+JSON.stringify(data))
        return res.status(200).json({ success: true, data: data })

      } catch (error) {
        console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> DELETE error 400: exception = '+error)
        return res.status(400).json({ success: false })
      }

    default:
      console.log(new Date().toUTCString()+' api/anotherTaskApp/index.js -> DEFAULT error 500: the request was not GET POST PUT nor DELETE')
      return res.status(500).json({ success: false })
  }
}
