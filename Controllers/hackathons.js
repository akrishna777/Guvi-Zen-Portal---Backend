import mongoose from 'mongoose'
import Hackathon from '../Models/hackathonTask.js'
import HackathonSubmissions from '../Models/hackathonSubmissions.js'

export const getHackathons = async (req, res) => {
  try {
    const hackathons = await Hackathon.find()
    res.status(200).json(hackathons)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createHackathon = async (req, res) => {
  const hackathonData = req.body
  const newHackathon = new Hackathon(hackathonData)
  try {
    await newHackathon.save()

    res.status(201).json(newHackathon)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updateHackathon = async (req, res) => {
  const { id: _id } = req.params
  const hackathon = req.body

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No Hackathon with that id')

  const updatedHackathon = await Query.findByIdAndUpdate(_id, hackathon, {
    new: true,
  })

  res.json(updatedHackathon)
}

export const deleteHackathon = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No Hackathon with that id')

  await Hackathon.findByIdAndRemove(id)

  res.json({ message: 'Query deleted successfully' })
}

export const getHackathonSubmissions = async (req, res) => {
  try {
    const submissions = await HackathonSubmissions.find()
    res.status(200).json(submissions)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createHackathonSubmissions = async (req, res) => {
  const submittedData = req.body
  const newSubmission = new HackathonSubmissions(submittedData)
  try {
    await newSubmission.save()

    res.status(201).json(newSubmission)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
