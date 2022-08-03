import mongoose from 'mongoose'

const capstoneSchema = mongoose.Schema({
  title: String,
  doclink: String,
  description: String,
})

const Capstone = mongoose.model('Capstone', capstoneSchema)

export default Capstone
