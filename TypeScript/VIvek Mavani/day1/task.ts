// 1.  Store 5 employees’ data in one array (ID,FirstName,LastName,Address,Salary).
//  Do the operation searching by indexnumber, EmployeeID, Insert the employee, 
//  delete the employee from the Array. Create one more array emp and join the value
//   with above array. When display list combine firstname and lastname as fullname,
//    From the address field flatnumber,city,state and should be splited.PF should be 
//    computed and total salary should be display.
let v1 : object = {};
let v2 : object = {
    ID : 6,
    FirstName : `FirstName6`,
    LastName :  `LastName6`,
    Address :  `flatnumber : 21 ,city : bhavnagar,state : gujarat6`,
    Salary :  6 +1000,
};
let employees : Array<object> = [];
for(let i = 1; i<= 5; i++)
{
     v1 = {
        ID : i,
        FirstName : `FirstName${i}`,
        LastName :  `LastName${i}`,
        Address :  `flatnumber : 21 ,city : bhavnagar,state : gujarat${i}`,
        Salary :  i +1000,
    }
  employees.push(v1);
}

//display all
GetAllEmployees(employees);
//searching by indexnumber, EmployeeID,
GetEmployeeById(employees);
//delete
DeleteEmployeeBYId(employees);
//Create one more array emp and join the value with above array.
MergeArray(v2,employees);


function MergeArray(v2,employees){
    var ee: Array<object> = employees.concat([v2]);
    console.log("--------------Create one more array emp and join the value with above array----------------");
    for(let emp of  ee)
    {
        GetAllData(emp);
    }
}

function DeleteEmployeeBYId(employees) :void{
    console.log("---------------Delete by EmployeeID---------------");
    GetAllData(employees.pop());
}

function GetEmployeeById(employees) : void {
    console.log("---------------searching by EmployeeID---------------");
    let length  : number = employees.length;
    let objects : object = {};

    for(let emp of  employees)
    {
        if(emp.ID == 1){
            objects = emp;
            break; 
        }
    }
    GetAllData(objects);
 //   console.log(objects);
}

function GetAllData(v) : void {
    console.log("------------------------------");
    console.log("ID: " + v.ID);
    console.log("FullName: " + v.FirstName + " " + v.LastName);
    console.log("Salary: ");
    console.log(v.Address.split([",",3]));
    console.log("Salary: " + v.Salary);
    console.log("PF: " + (v.Salary * 12)/100);
    console.log("------------------------------");
}
function GetAllEmployees(employees) : void {
    console.log("---------------GetAllEmployees---------------");

    for(let emp of  employees)
    {
        GetAllData(emp);
    }
}