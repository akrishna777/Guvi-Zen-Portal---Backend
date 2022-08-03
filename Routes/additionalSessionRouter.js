import express from 'express'

import {
  createAdditionalSession,
  deleteAdditionalSession,
  getAdditionalSessions,
  updateAdditionalSession,
} from '../Controllers/additionalSessions.js'

const router = express.Router()

router.get('/', getAdditionalSessions)
router.post('/', createAdditionalSession)
router.patch('/:id', updateAdditionalSession)
router.delete('/:id', deleteAdditionalSession)

export default router
