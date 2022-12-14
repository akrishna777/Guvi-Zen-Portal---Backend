import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../Models/userModel.js'

export const signin = async (req, res) => {
  const { email, password } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." })

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password,
    )

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid Credentials' })

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'test',
      { expiresIn: '1h' },
    )

    res.status(200).json({ result: existingUser, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' })
  }
}

export const signup = async (req, res) => {
  console.log(`This is request body data: ${req.body}`)
  const { email, password, firstname, lastname, typeOfUser } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser)
      return res.status(400).json({ message: 'User Already Exists.' })

    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await User.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
      typeOfUser: typeOfUser,
    })

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '1h',
    })

    res.status(200).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' })
    console.log(error)
  }
}
