//Create EmployeeObject with ID,Name,Address,skills and store it empcollection.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to Mongodb...'))
.catch(err => console.error('Could not connected to Mongodb...',err));

const courseSchema = new mongoose.Schema({
    ID : Number,
    Name : String,
    Address: String,
    skills:[String],
});

const Employee  = mongoose.model('empcollection',courseSchema);
async function createEmployee(){
    const employee = new Employee({
        ID : 1,
        Name : 'vivek',
        Address: 'bhavnagar',
        skills:['football','cricket'],
    });
    
    const result = await employee.save();
    console.log(result);
}
createEmployee();