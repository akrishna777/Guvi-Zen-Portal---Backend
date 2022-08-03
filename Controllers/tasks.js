import mongoose from 'mongoose'
import Task from '../Models/TaskModel.js'

export const getTasks = async (req, res) => {
  try {
    const Tasks = await Task.find()

    res.status(201).json(Tasks)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createTask = async (req, res) => {
  const task = req.body

  const newTask = new Task(task)
  try {
    await newTask.save()

    res.status(201).json(newTask)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
