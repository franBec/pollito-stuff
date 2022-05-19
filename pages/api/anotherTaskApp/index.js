import dbConnect from '../../../lib/dbConnect'
import Task from '../../../models/Task'

export default async function handler(req, res) {
  await dbConnect()
  const {method , body, query} = req

  switch (method) {
    //CRUD [C]reate
    case 'POST':
      try {
        const data = new Task(body)
        await data.save()
        if (!data) {
          return res.status(404).json({ success: false })
        }
        return res.status(200).json({ success: true, data: data })
      } catch (error) {
        return res.status(400).json({ success: false })
      }
    
    //CRUD [R]ead
    case 'GET':
      try {
        const page = query.page ?? 1      //defaults to first page
        const limit = query.limit ?? 5    //defaults to 5 per page
        const sort = query.sort ?? ''

        //defaults to createdAt asc
        const sortObject = {[query.orderBy ?? 'createdAt']:sort ==='desc' ? -1 : 1}

        const data = await Task.paginate({}, {limit, page, sort:sortObject})
        if (!data) {
          return res.status(404).json({ success: false })
        }
        return res.status(200).json({ success: true, data: data })
      } catch (error) {
        return res.status(400).json({ success: false })
      }

    //CRUD [U]pdate
    case 'PUT':
      try {
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
          return res.status(404).json({ success: false })
        }
        return res.status(200).json({ success: true, data: data })
      } catch (error) {
        return res.status(400).json({ success: false })
      }

    //CRUD [D]elete
    case 'DELETE':
      try {
        const data = await Task.findByIdAndDelete(body)
        if (!data) {
          return res.status(404).json({ success: false })
        }
        return res.status(200).json({ success: true, data: data })
      } catch (error) {
        return res.status(400).json({ success: false })
      }

    default:
      return res.status(500).json({ success: false })
  }
}
