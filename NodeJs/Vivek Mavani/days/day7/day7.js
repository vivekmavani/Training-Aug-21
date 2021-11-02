const logger = require('./logger');
//validation
const Joi=  require('joi');
// middalware 
const express = require('express');
const app = express();
//Helps secure your apps by setting various HTTP headers.
const helmet = require("helmet");
//HTTP request logger
var morgan = require('morgan')
app.use(express.json()); //req.body
app.use(express.urlencoded({extended: true})); // key=value&kay=value
app.use(express.static('public')); // root of the site in folder like images,txt or static data
app.use(helmet());
if(app.get('env') === 'development')
{
    app.use(morgan('tiny'));
    console.log('Morgan enable....');
}

app.use(logger);
app.use(function(req,res,next){
    console.log("Authenticate...");
    next();
});

const courses = [
    {id : 1, name : "course1"},
    {id : 2, name : "course2"},
    {id : 3, name : "course3"},
    
];

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3,4]);
});

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The Course with given id was not found');
    res.send(course);
});


// app.get('/api/courses/:year/:month',(req,res)=>{
//   //  res.send(req.query); // ?sortby=name
//     res.send(req.params);// get :year :month
// });

app.post('/api/courses',(req,res)=>{
    const {error} = validateCourse(req.body); 

    if(error)return res.status(400).send(error.details[0].message);

    const course = {
        id : courses.length +1,
        name : req.body.name
    };
 courses.push(course);
 res.send(course);
});

app.put('/api/courses/:id',(req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The Course with given id was not found');

    //obj desrch.
    const { error } = validateCourse(req.body); 

    if(error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
      
});

app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The Course with given id was not found');

    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});

//set env port
const port = process.env.PORT || 5000;
// for statrting or listening port 
app.listen(port,()=> console.log(`Lisening port ${port}.....`));

function validateCourse(course){
    const shema = {
        name : Joi.string().min(3).required()
    };

    return Joi.validate(course,shema);
}