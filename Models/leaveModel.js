import mongoose from 'mongoose'

const leaveSchema = mongoose.Schema({
  noOfDays: String,
  startdate: Date,
  enddate: Date,
  reason: String,
  status: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
})

const Leave = mongoose.model('Leaves', leaveSchema)

export default Leave
