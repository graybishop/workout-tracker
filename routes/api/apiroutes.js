import express from 'express'
import { Workout } from "../../models/index.js";
const router = express.Router()

router.get('/workouts', async (req, res) =>{
  let workouts
  workouts = await Workout.find({})
  res.json(workouts)
})

router.get('/workouts/range', (req, res) =>{
  res.send('got workouts in range')
})

router.put('/workouts/:id', (req, res) =>{
  res.send(`put workout at id ${req.params.id}`)
})

router.post('/workouts', (req, res) =>{
  res.send('posted to workouts')
})

export default router