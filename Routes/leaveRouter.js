import express from 'express'
import { createLeaves, getLeaves } from '../Controllers/leaves.js'

const router = express.Router()

router.get('/', getLeaves)
router.post('/', createLeaves)

export default router
