//validation
const Joi=  require('joi');
// middalware 

const express = require('express');
const app = express();
const students = require('../students');
var router = express.Router();
let verifyToken = require('../../Authentication/verifytoken');
//
app.use(express.json());


// 3. Create a RESTFUL API which return a particular student FEES Record. Fees field are http://localhost:3000/students/1/fees
router.get('/students/:id/:fees',verifyToken,(req,res)=>{
    const student = students.find(c => c.ID === parseInt(req.params.id));
    if(!student) return res.status(404).send('The student with given id was not found');
    res.send(student.Fees);
});

module.exports = router;