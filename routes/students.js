const express = require('express')
//const router = express.Router()
const Students = require('../models/students')

async function getStudents(req, res) {
    try{
        const findStudents = await Students.find()
        res.json(findStudents)
    }catch(err){
        res.send('Error'+ err)
    }
}

async function getStudent(req, res) {
    try{
        const findStudents = await Students.findById(req.params.id)
        res.json(findStudents)
    }catch(err){
        res.send('Error'+ err)
    }
}

async function insertStudent(req, res){

        const student = new Students({
            name: req.body.name,
            age: req.body.age,
            rollNo: req.body.rollNo,
            address: req.body.address
        })
    try{
        const postStudent = await student.save()
        res.json(postStudent)
    }catch(err){
        res.send('Error'+ err)
    }
}

async function patchStudent(req, res) {
    try{
        const updateStudent = await Students.findById(req.params.id)
        updateStudent.address = req.body.address
        const updateResponse = await updateStudent.save()
        res.json(updateResponse)
    }catch(err){
        res.send('Error' + err)
    }
}

async function deleteStudentData(req, res) {
    try{
        console.log(req.params.id)
        const deletedStudent = await Students.remove({_id: req.params.id})
        res.json(deletedStudent)
    }catch(err){
        res.send('Error' + err)
    }
}

async function putStudent(req, res) {
    try{
        const updateStudent = await Students.findById(req.params.id)
        const student = new Students({
            name: req.body.name,
            age: req.body.age,
            rollNo: req.body.rollNo,
            address: req.body.address
        })
        Students.updateOne({ id: req.params.id }, req.body).then(result => {
            res.json({ message: "Update successful!" });
          });
        //res.json(updateResponse)
    } catch(err){
        res.send('Error' + err).status(500)
    }
}

module.exports.getStudents = getStudents;
module.exports.getStudent = getStudent;
module.exports.insertStudent = insertStudent;
module.exports.patchStudent = patchStudent;
module.exports.deleteStudentData = deleteStudentData;
module.exports.putStudent = putStudent;