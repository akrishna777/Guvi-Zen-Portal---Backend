import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  password: { type: String },
  typeOfUser: { type: String },
})

const User = mongoose.model('User', userSchema)

export default User
