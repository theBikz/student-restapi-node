const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/student'

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})
const app = express()
app.use(express.json())

const studentRouter = require('./routes/students')
//app.use('/v1', studentRouter)
app.get('/v1/', studentRouter.getStudents)
app.get('/v1/:id', studentRouter.getStudent)
app.post('/v1/', studentRouter.insertStudent)
app.patch('/v1/:id', studentRouter.patchStudent)
app.put('/v1/:id', studentRouter.putStudent)
app.delete('/v1/:id', studentRouter.deleteStudentData)


app.listen(9000, ()=>{
    console.log('server started')
})