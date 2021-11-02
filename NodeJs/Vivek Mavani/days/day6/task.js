//validation
const Joi=  require('joi');
// middalware 
const express = require('express');
const app = express();
//
app.use(express.json());

// app.get('/api/customers/:year/:month',(req,res)=>{
//   //  res.send(req.query); // ?sortby=name
//     res.send(req.params);// get :year :month
// });

//set env port
const port = process.env.PORT || 3000;
// for statrting or listening port 
app.listen(port,()=> console.log(`Lisening port ${port}.....`));

function validatecustomer(customer){
    const shema = {
        name : Joi.string().min(3).required()
    };

    return Joi.validate(customer,shema);
}

// Practice Exercise

// 1.Create a Restful API, which will return Customer list in JSON format.

// http://localhost:3000/customers

const customers = [
    {id : 1, name : "customer1"},
    {id : 2, name : "customer2"},
    {id : 3, name : "customer3"},
    
];

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/api/customers',(req,res)=>{
    res.send(customers);
});


// 2. Create a Restful API which will search a particular record from the customer list.

// http://localhost:3000/customers/1

app.get('/customers/:id',(req,res)=>{
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('The customer with given id was not found');
    res.send(customer);
});

// 3. Create a Restful API which will insert a new customer object in the customer list.

// http://localhost:3000/customer

app.post('/customer',(req,res)=>{
    const {error} = validatecustomer(req.body); 

    if(error) return res.status(400).send(error.details[0].message);

    const customer = {
        id : customers.length +1,
        name : req.body.name
    };
 customers.push(customer);
 res.send(customer);
});

// 3. Create a Restful API which update a name of existing customer whose customer ID is 1

// http://locahost:3000/customer


app.put('/customer/:id',(req,res) =>{
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('The customer with given id was not found');

    //obj desrch.
    const { error } = validatecustomer(req.body); 

    if(error) return res.status(400).send(error.details[0].message);

    customer.name = req.body.name;
    res.send(customer);
      
});

// 4. Create a Restful API which will delete a record from the customer list.

// http://localhost:3000/customer

app.delete('/customer/:id',(req,res)=>{
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if(!customer) return res.status(404).send('The customer with given id was not found');

    const index = customers.indexOf(customer);
    customers.splice(index,1);
    res.send(customer);
});


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
app.get('/students',(req,res)=>{
    res.send(students);
});

// 2. Create RESTFUL API which will return a Particular Student Record

// http://localhost:3000/students/1

app.get('/students/:id',(req,res)=>{
    const student = students.find(c => c.ID === parseInt(req.params.id));
    if(!student) return res.status(404).send('The student with given id was not found');
    res.send(student);
});

// 3. Create a RESTFUL API which return a particular student FEES Record. Fees field are http://localhost:3000/students/1/fees
app.get('/students/:id/:fees',(req,res)=>{
    const student = students.find(c => c.ID === parseInt(req.params.id));
    if(!student) return res.status(404).send('The student with given id was not found');
    res.send(student.Fees);
});
// 4. Create a RESTFUL API which will return a particular student Exam Result. Result Fields are http://localhost:/3000/students/1/result
app.get('/students/:id/:result',(req,res)=>{
    const student = students.find(c => c.ID === parseInt(req.params.id));
    if(!student) return res.status(404).send('The student with given id was not found');
    res.send(student.Result);
});
// 5. Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.

app.put('/student/:id',(req,res) =>{
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