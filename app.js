import express from "express";
import morgan from 'morgan'
import path from 'path'

let app = express()

const PORT = process.env.PORT || 3001

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req, res) =>{
  res.sendFile('./html/index.html', {root: path.resolve('', 'public')})
})

app.get('/exercise', (req, res) =>{
  res.sendFile('./html/exercise.html', {root: path.resolve('', 'public')})
})

app.get('/stats', (req, res) =>{
  res.sendFile('./html/stats.html', {root: path.resolve('', 'public')})
})

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}. Localhost link: http://localhost:${PORT}`)
})