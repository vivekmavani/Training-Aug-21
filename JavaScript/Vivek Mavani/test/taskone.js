// Store 5 employees’ data in one array (ID,FirstName,LastName,Address,Salary). 
// Do the operation searching by indexnumber, EmployeeID, Insert the employee,
//  delete the employee from the Array. Create one more array emp and join the value
//   with above array. When display list combine firstname and lastname as fullname,
//    From the address field flatnumber,city,state and should be splited.PF should be
//     computed and total salary should be display.
var employee1 = {
    ID : 1,
    FirstName : "vivek1",
    LastName: "mavani1",
    Address : "bhavnagar1",
    Salary : 1000,

}
var employee2 = {
    ID : 2,
    FirstName : "vivek2",
    LastName: "mavani2",
    Address : "bhavnagar2",
    Salary : 2000,

}
var employee3 = {
    ID : 3,
    FirstName : "vivek3",
    LastName: "mavani3",
    Address : "bhavnagar3",
    Salary : 3000,
}
var employee4 = {
    ID : 4,
    FirstName : "vivek4",
    LastName: "mavani4",
    Address : "bhavnagar4",
    Salary : 4000,

}
var employee5 = {
    ID : 5,
    FirstName : "vivek5",
    LastName: "mavani5",
    Address : "bhavnagar5",
    Salary : 5000,
}
// var fullnameforemp = {
//     FullName : function(){
//         return this.FirstName + " "+ this.LastName;
//     }
// }
var array = [employee1, employee2,employee3,employee4,employee5];

//display all
displayall(array);

//searching by EmployeeID
console.log("---------------------------Searching By EmployeeID---------------------------");
displaone(array.filter(checkEmployeeID));
//searching by indexnumber
serchbyindex(4);
 
// Insert the employee,
console.log("---------------------------Insert The Employee ID 6---------------------------");
var employee6 = {
    ID : 6,
    FirstName : "vivek6",
    LastName: "mavani6",
    Address : "bhavnagar6",
    Salary : 6000,
}
array.push(employee6);
displayall(array);

//delete the employee from the Array
console.log("---------------------------Delete The Employee From The Array---------------------------");
array.pop();
displayall(array);

//Create one more array emp and join the value with above array
console.log("---------------------------Create one more array emp and join the value with above array---------------------------");
var employee7 = {
    ID : 7,
    FirstName : "vivek7",
    LastName: "mavani7",
    Address : "bhavnagar7",
    Salary : 7000,
}
var array2 = [employee6,employee7];
var newar = array.concat(array2);
displayall(newar);

function displayall(arrayss){
    console.log("---------------------------Display All Employess---------------------------");
    for(var a of arrayss)
    {
        console.log("---------------------------");
        console.log("ID: " + a.ID);
        console.log("FullName: " +a.FirstName +" " +a.LastName);
        console.log("Address: " +a.Address);
        console.log("Salary: " +a.Salary);
        console.log("PF: " +(a.Salary *12)/100);
        console.log("---------------------------");
    }
}


function checkEmployeeID(EmployeeID) {
    return EmployeeID.ID == 1;
  }

  function serchbyindex(indexnumber){
    console.log("---------------------------Serch By Index---------------------------");
    if(indexnumber < array.length)
    {
        console.log("---------------------------");
        console.log("ID: " + array[indexnumber].ID);
        console.log("FullName: " +array[indexnumber].FirstName +" " +array[indexnumber].LastName);
        console.log("Address: " +array[indexnumber].Address);
        console.log("Salary: " +array[indexnumber].Salary);
        console.log("---------------------------");
    }else
    {
        console.log("Enter Valid Index");
    }
  }

  function displaone(abc){
    console.log("---------------------------Display All Employess---------------------------");
    for(var a of abc)
    {
        console.log("---------------------------");
        console.log("ID: " + a.ID);
        console.log("FullName: " +a.FirstName +" " +a.LastName);
        console.log("Address: " +a.Address);
        console.log("Salary: " +a.Salary);
        console.log("---------------------------");
    }
}