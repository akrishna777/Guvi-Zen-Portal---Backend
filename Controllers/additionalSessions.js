import mongoose from 'mongoose'
import AdditionalSession from '../Models/additionSession.js'

export const getAdditionalSessions = async (req, res) => {
  try {
    const additionalSessionData = await AdditionalSession.find()

    res.status(200).json(additionalSessionData)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createAdditionalSession = async (req, res) => {
  const session = req.body

  if (session.contents === '') {
    const newContents = ['']
    session.contents = newContents
  } else {
    const newContents = session.contents.split(',')
    session.contents = newContents
  }

  if (session.preread === '') {
    const newPrereads = ['']
    session.preread = newPrereads
  } else {
    const newPrereads = session.preread.split(',')
    session.preread = newPrereads
  }

  const newSession = new AdditionalSession(session)
  try {
    await newSession.save()

    res.status(201).json(newSession)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updateAdditionalSession = async (req, res) => {
  const { id: _id } = req.params
  const session = req.body

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No sessions with that id')

  const updatedSession = await AdditionalSession.findByIdAndUpdate(
    _id,
    session,
    {
      new: true,
    },
  )

  res.json(updatedSession)
}

export const deleteAdditionalSession = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No sessions with that id')

  await AdditionalSession.findByIdAndRemove(id)

  res.json({ message: 'Session deleted successfully' })
}
