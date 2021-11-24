// 1.  Store 5 employees’ data in one array (ID,FirstName,LastName,Address,Salary).
//  Do the operation searching by indexnumber, EmployeeID, Insert the employee, 
//  delete the employee from the Array. Create one more array emp and join the value
//   with above array. When display list combine firstname and lastname as fullname,
//    From the address field flatnumber,city,state and should be splited.PF should be 
//    computed and total salary should be display.
var v1 = {};
var v2 = {
    ID: 6,
    FirstName: "FirstName6",
    LastName: "LastName6",
    Address: "flatnumber : 21 ,city : bhavnagar,state : gujarat6",
    Salary: 6 + 1000
};
var employees = [];
for (var i = 1; i <= 5; i++) {
    v1 = {
        ID: i,
        FirstName: "FirstName".concat(i),
        LastName: "LastName".concat(i),
        Address: "flatnumber : 21 ,city : bhavnagar,state : gujarat".concat(i),
        Salary: i + 1000
    };
    employees.push(v1);
}
//display all
GetAllEmployees(employees);
//searching by indexnumber, EmployeeID,
GetEmployeeById(employees);
//delete
DeleteEmployeeBYId(employees);
//Create one more array emp and join the value with above array.
MergeArray(v2, employees);
function MergeArray(v2, employees) {
    var ee = employees.concat([v2]);
    console.log("--------------Create one more array emp and join the value with above array----------------");
    for (var _i = 0, ee_1 = ee; _i < ee_1.length; _i++) {
        var emp = ee_1[_i];
        GetAllData(emp);
    }
}
function DeleteEmployeeBYId(employees) {
    console.log("---------------Delete by EmployeeID---------------");
    GetAllData(employees.pop());
}
function GetEmployeeById(employees) {
    console.log("---------------searching by EmployeeID---------------");
    var length = employees.length;
    var objects = {};
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var emp = employees_1[_i];
        if (emp.ID == 1) {
            objects = emp;
            break;
        }
    }
    GetAllData(objects);
    //   console.log(objects);
}
function GetAllData(v) {
    console.log("------------------------------");
    console.log("ID: " + v.ID);
    console.log("FullName: " + v.FirstName + " " + v.LastName);
    console.log("Salary: ");
    console.log(v.Address.split([",", 3]));
    console.log("Salary: " + v.Salary);
    console.log("PF: " + (v.Salary * 12) / 100);
    console.log("------------------------------");
}
function GetAllEmployees(employees) {
    console.log("---------------GetAllEmployees---------------");
    for (var _i = 0, employees_2 = employees; _i < employees_2.length; _i++) {
        var emp = employees_2[_i];
        GetAllData(emp);
    }
}
