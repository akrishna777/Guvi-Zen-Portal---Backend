import express from 'express'
import {
  createCapstone,
  createCapstoneSubmissions,
  deleteCapstone,
  getCapstone,
  getCapstoneSubmissions,
  updateCapstone,
} from '../Controllers/capstone.js'

const router = express.Router()

router.get('/', getCapstone)
router.post('/', createCapstone)
router.patch('/:id', updateCapstone)
router.delete('/:id', deleteCapstone)

router.get('/submissions', getCapstoneSubmissions)
router.post('/submissions', createCapstoneSubmissions)

export default router
