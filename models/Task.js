import mongoose from 'mongoose'
const mongoosePaginate = require('mongoose-paginate-v2')

const TaskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Task text is required'],
    },
    description: {
      type: String,
    },
    reminder: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)
TaskSchema.plugin(mongoosePaginate)

export default mongoose.models.Task || mongoose.model('Task', TaskSchema)
