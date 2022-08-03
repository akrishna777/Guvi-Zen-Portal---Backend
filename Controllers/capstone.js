import mongoose from 'mongoose'
import Capstone from '../Models/capstone.js'
import CapstoneSubmission from '../Models/capstoneSubmission.js'

export const getCapstone = async (req, res) => {
  try {
    const capstone = await Capstone.find()
    res.status(200).json(capstone)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createCapstone = async (req, res) => {
  const capstoneData = req.body
  const newCapstone = new Capstone(capstoneData)
  try {
    await newCapstone.save()

    res.status(201).json(newCapstone)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updateCapstone = async (req, res) => {
  const { id: _id } = req.params
  const capstone = req.body

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No Capstone with that id')

  const updatedCapstone = await Query.findByIdAndUpdate(_id, capstone, {
    new: true,
  })

  res.json(updatedCapstone)
}

export const deleteCapstone = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No Capstone with that id')

  await Capstone.findByIdAndRemove(id)

  res.json({ message: 'Query deleted successfully' })
}

export const getCapstoneSubmissions = async (req, res) => {
  try {
    const submissions = await CapstoneSubmission.find()
    res.status(200).json(submissions)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createCapstoneSubmissions = async (req, res) => {
  const submittedData = req.body
  const newSubmission = new CapstoneSubmission(submittedData)
  try {
    await newSubmission.save()

    res.status(201).json(newSubmission)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
