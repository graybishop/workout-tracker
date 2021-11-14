import express from "express";
import morgan from 'morgan'
import router from './routes/index.js'
let app = express()

const PORT = process.env.PORT || 3001

import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(router)

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}. Localhost link: http://localhost:${PORT}`)
})