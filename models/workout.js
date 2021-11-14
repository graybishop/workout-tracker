import mongoose from 'mongoose';
const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises:[{
    type: {type:String},
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
  }]
},
{
  strict: true
})

const Workout = mongoose.model('Workout', workoutSchema)

export {Workout}