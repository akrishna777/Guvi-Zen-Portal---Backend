import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
  title: String,
  frontsource: String,
  frontdeployed: String,
  backsource: String,
  backdeployed: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const Task = mongoose.model('Task', taskSchema)

export default Task
