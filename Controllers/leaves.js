import Leave from '../Models/leaveModel.js'

export const getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find()
    res.status(200).json(leaves)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createLeaves = async (req, res) => {
  const leave = req.body
  const newLeave = new Leave(leave)
  try {
    await newLeave.save()

    res.status(201).json(newLeave)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
