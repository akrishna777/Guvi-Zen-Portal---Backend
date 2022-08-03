import express from 'express'

import {
  createSession,
  getSessions,
  updateSession,
  deleteSession,
} from '../Controllers/sessions.js'

const router = express.Router()

router.get('/', getSessions)
router.post('/', createSession)
router.patch('/:id', updateSession)
router.delete('/:id', deleteSession)

export default router
