import express from 'express'
import { Workout } from "../../models/index.js";
const router = express.Router()

router.get('/workouts', async (req, res) =>{
  let workouts
  workouts = await Workout.find({})
  res.json(workouts)
})

router.post('/workouts', (req, res) =>{
  const newWorkout = new Workout(req.body)
  res.json(newWorkout)
})

router.put('/workouts/:id', (req, res) =>{
  res.send(`put workout at id ${req.params.id}`)
})

router.get('/workouts/range', (req, res) =>{
  res.send('got workouts in range')
})



export default router