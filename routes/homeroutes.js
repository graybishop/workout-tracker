import express from 'express'
import path from 'path'

const router = express.Router()

router.get('/', (req, res) =>{
  res.sendFile('./html/index.html', {root: path.resolve('', 'public')})
})

router.get('/exercise', (req, res) =>{
  res.sendFile('./html/exercise.html', {root: path.resolve('', 'public')})
})

router.get('/stats', (req, res) =>{
  res.sendFile('./html/stats.html', {root: path.resolve('', 'public')})
})

export default router