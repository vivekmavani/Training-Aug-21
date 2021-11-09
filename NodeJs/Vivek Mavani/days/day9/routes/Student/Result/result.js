//validation
const Joi=  require('joi');
// middalware 
const path = require('path');
const express = require('express');
const students = require('../students');
const app = express();
var router = express.Router();
const verifytokenpath = '/Authentication/verifytoken.js'
let verifyToken = require('../../Authentication/verifytoken');


//  Create a RESTFUL API which will return a particular student Exam Result. Result Fields are http://localhost:/3000/students/1/result
router.get('/students/:id/:result',verifyToken,(req,res)=>{
    const student = students.find(c => c.ID === parseInt(req.params.id));
    if(!student) return res.status(404).send('The student with given id was not found');
    res.send(student.Result);
});
// Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.

router.put('/student/:id',verifyToken,(req,res) =>{
    const student = students.find(c => c.ID === parseInt(req.params.id));
    if(!student) return res.status(404).send('The student with given id was not found');

    //obj desrch.
    const shema = {
        Eng : Joi.number()
        .integer()
        .min(0)
        .max(100),
    };
     const { error } =  Joi.validate(req.body,shema);

    if(error) return res.status(400).send(error.details[0].message);

    student.Result.Eng = req.body.Eng;
    res.send(student);
      
});
module.exports = router;