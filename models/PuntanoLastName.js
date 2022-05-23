import mongoose from 'mongoose'

const PuntanoLastNameSchema = new mongoose.Schema(
  {
    lastName: {type: String,},
  },
)

export default mongoose.models.PuntanoLastName || mongoose.model('PuntanoLastName', PuntanoLastNameSchema, 'lastNamesSample')