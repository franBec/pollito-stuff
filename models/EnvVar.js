import mongoose from "mongoose";

const EnvVarSchema = new mongoose.Schema(
    {
        key: {type: String},
        value: {type: String}
    }
)
export default mongoose.models.EnvVar || mongoose.model('EnvVar', EnvVarSchema, 'envVars')
