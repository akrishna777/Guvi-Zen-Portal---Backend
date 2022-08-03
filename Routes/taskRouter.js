import express from 'express'
import { createTask, getTasks } from '../Controllers/tasks.js'

const router = express.Router()

router.get('/', getTasks)
router.post('/', createTask)

export default router
