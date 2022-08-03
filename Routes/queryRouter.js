import express from 'express'

import {
  getQueries,
  createQuery,
  updateQuery,
  deleteQuery,
} from '../Controllers/queries.js'

const router = express.Router()

router.get('/', getQueries)
router.post('/', createQuery)
router.patch('/:id', updateQuery)
router.delete('/:id', deleteQuery)

export default router
