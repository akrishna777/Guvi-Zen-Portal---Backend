import mongoose from 'mongoose'

const sessionSchema = mongoose.Schema({
  sessionId: Number,
  heading: String,
  timing: Date,
  contents: [String],
  preread: [String],
  task: String,
  tags: [String],
  recording: String,
  passcode: String,
  submission: [
    {
      typolabel: String,
      fieldname: String,
    },
  ],
})

const Session = mongoose.model('Session', sessionSchema)

export default Session
