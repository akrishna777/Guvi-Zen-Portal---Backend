import mongoose from 'mongoose'
import Query from '../Models/queryModel.js'

export const getQueries = async (req, res) => {
  try {
    const queryData = await Query.find()

    res.status(200).json(queryData)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createQuery = async (req, res) => {
  const query = req.body
  const newQuery = new Query(query)
  try {
    await newQuery.save()
    res.status(201).json(newQuery)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updateQuery = async (req, res) => {
  const { id: _id } = req.params
  const query = req.body

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No Query with that id')

  const updatedQuery = await Query.findByIdAndUpdate(_id, query, {
    new: true,
  })

  res.json(updatedQuery)
}

export const deleteQuery = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No Query with that id')

  await Query.findByIdAndRemove(id)

  res.json({ message: 'Query deleted successfully' })
}
