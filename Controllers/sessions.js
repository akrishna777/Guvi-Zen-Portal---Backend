import mongoose from 'mongoose'
import Session from '../Models/sessionModel.js'

export const getSessions = async (req, res) => {
  try {
    const SessionData = await Session.find()

    res.status(200).json(SessionData)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createSession = async (req, res) => {
  const session = req.body

  if (session.tags === '') {
    const newTags = ['']
    session.tags = newTags
  } else {
    const newTags = session.tags.replace(/\s/g, '').split(',')
    session.tags = newTags
  }
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

  const newSession = new Session(session)
  try {
    await newSession.save()

    res.status(201).json(newSession)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updateSession = async (req, res) => {
  const { id: _id } = req.params
  const session = req.body

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No sessions with that id')

  const updatedSession = await Session.findByIdAndUpdate(_id, session, {
    new: true,
  })

  res.json(updatedSession)
}

export const deleteSession = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No sessions with that id')

  await Session.findByIdAndRemove(id)

  res.json({ message: 'Session deleted successfully' })
}
