import homeRouter from './homeroutes.js'
import express from 'express'
const router = express.Router()

router.use('/', homeRouter)

export default router