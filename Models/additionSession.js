import mongoose from 'mongoose'

const additionalSessionSchema = mongoose.Schema({
  heading: String,
  timing: Date,
  contents: [String],
  preread: [String],
  recording: String,
  passcode: String,
})

const AdditionalSession = mongoose.model(
  'AdditionalSession',
  additionalSessionSchema,
)

export default AdditionalSession
