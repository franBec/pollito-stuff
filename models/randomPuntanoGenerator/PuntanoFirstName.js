import mongoose from 'mongoose'

const PuntanoFirstNameSchema = new mongoose.Schema(
  {
    name: {type: String,},
    gender: {type: String,},
  },
)

export default mongoose.models.PuntanoFirstName || mongoose.model('PuntanoFirstName', PuntanoFirstNameSchema, 'firstNamesSample')
