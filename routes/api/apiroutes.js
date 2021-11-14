import express from 'express'
import { Workout } from "../../models/index.js";
const router = express.Router()

router.get('/workouts', async (req, res) =>{
  let workouts
  workouts = await Workout.aggregate([
    {$match:{}},
    {$addFields: {totalDuration: {$sum: '$exercises.duration'}}}
  ])
  console.log(workouts)
  res.json(workouts)
})

router.post('/workouts', (req, res) =>{
  const newWorkout = new Workout(req.body)
  newWorkout.save()
  res.json(newWorkout)
})

router.put('/workouts/:id', async (req, res) =>{
  console.log(await Workout.findOne({_id: req.params.id}))
  let result = await Workout.updateOne({_id: req.params.id}, {$push: {exercises: req.body}})
  res.json(result)
})

router.get('/workouts/range', (req, res) =>{
  res.send('got workouts in range')
})



export default router