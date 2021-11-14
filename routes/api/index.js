import apiRouter from './apiroutes.js'

import express from 'express'
const router = express.Router()

router.use('/', apiRouter)

export default router