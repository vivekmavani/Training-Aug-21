//validation
const Joi=  require('joi');
// middalware 

const express = require('express');
const app = express();
var router = express.Router();
let verifyToken = require('./verifytoken');
//
app.use(express.json());

// Assignment:

// Collections as follows:

// Students=[{"ID":1,"Name":Reena","Address":"Ahmedabad","Fees":{"Amount:10000,"PaymentDate":"12/12/2020","Status":"true"},"Result":{"Hindi":80,"Eng":70,"Math":60,"Total":210,"Grade":"A"}

// },{"ID":2,"Name":"Rita","Address":"Surat", "Fees":{"Amount:12000,"PaymentDate":"12/12/2020","Status":"false"},

// "Result":{"Hindi":80,"Eng":70,"Math":60,"Total":210,"Grade":"A"}

// }]

const students=[{ID:1,Name:"Reena",Address:"Ahmedabad",
Fees:{Amount:10000,PaymentDate:"12/12/2020",Status:true},
Result:{Hindi:80,Eng:70,Math:60,Total:210,Grade:"A"}},
{ID:2,Name:"Rita",Address:"Surat", 
Fees:{Amount:12000,PaymentDate:"12/12/2020",Status:false},
Result:{Hindi:80,Eng:70,Math:60,Total:210,Grade:"A"}
}];
// 1. Create a RESTFUL API which will return a Studentlist.

// http://localhost:3000/students
router.get('/students',verifyToken,(req,res)=>{
    res.send(students);
});

// 2. Create RESTFUL API which will return a Particular Student Record

// http://localhost:3000/students/1

router.get('/students/:id',verifyToken,(req,res)=>{
    const student = students.find(c => c.ID === parseInt(req.params.id));
    if(!student) return res.status(404).send('The student with given id was not found');
    res.send(student);
});

// 3. Create a RESTFUL API which return a particular student FEES Record. Fees field are http://localhost:3000/students/1/fees
router.get('/students/:id/:fees',verifyToken,(req,res)=>{
    const student = students.find(c => c.ID === parseInt(req.params.id));
    if(!student) return res.status(404).send('The student with given id was not found');
    res.send(student.Fees);
});
// 4. Create a RESTFUL API which will return a particular student Exam Result. Result Fields are http://localhost:/3000/students/1/result
router.get('/students/:id/:result',verifyToken,(req,res)=>{
    const student = students.find(c => c.ID === parseInt(req.params.id));
    if(!student) return res.status(404).send('The student with given id was not found');
    res.send(student.Result);
});
// 5. Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.

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