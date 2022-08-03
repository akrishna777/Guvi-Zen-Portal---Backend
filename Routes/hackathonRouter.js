import express from 'express'

import {
  createHackathon,
  createHackathonSubmissions,
  deleteHackathon,
  getHackathons,
  getHackathonSubmissions,
  updateHackathon,
} from '../Controllers/hackathons.js'

const router = express.Router()

router.get('/', getHackathons)
router.post('/', createHackathon)
router.patch('/:id', updateHackathon)
router.delete('/:id', deleteHackathon)

router.get('/submissions', getHackathonSubmissions)
router.post('/submissions', createHackathonSubmissions)

export default router
