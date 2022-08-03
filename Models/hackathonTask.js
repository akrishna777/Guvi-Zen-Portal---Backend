import mongoose from 'mongoose'

const hackathonTaskSchema = mongoose.Schema({
  title: String,
  doclink: String,
  description: String,
})

const Hackathon = mongoose.model('HackathonTask', hackathonTaskSchema)

export default Hackathon
