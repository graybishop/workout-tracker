import homeRouter from './homeroutes.js'
import apiRouter from './api/index.js'
import express from 'express'
const router = express.Router()

router.use('/', homeRouter)
router.use('/api', apiRouter)

export default router