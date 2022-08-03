import mongoose from 'mongoose'

const querySchema = mongoose.Schema({
  category: String,
  language: String,
  title: String,
  description: String,
  endtime: Date,
  starttime: Date,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const Query = mongoose.model('Query', querySchema)

export default Query
