import mongoose from 'mongoose'

const hackathonSubmissionSchema = mongoose.Schema({
  frontsource: String,
  frontdeployed: String,
  backsource: String,
  backdeployed: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const HackathonSubmissions = mongoose.model(
  'HackathonSubmissions',
  hackathonSubmissionSchema,
)

export default HackathonSubmissions
