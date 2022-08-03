import mongoose from 'mongoose'

const capstoneSubmissionSchema = mongoose.Schema({
  frontsource: String,
  frontdeployed: String,
  backsource: String,
  backdeployed: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const CapstoneSubmission = mongoose.model(
  'CapstoneSubmission',
  capstoneSubmissionSchema,
)

export default CapstoneSubmission
