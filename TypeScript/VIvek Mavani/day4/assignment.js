// Store 5 Employee Data(ID,Name,City,DOJ) in one Array. Search the employee with ID.
// Search the employees who has joined after year 2020
// Search the employee who has joined after year 2020 and stays in Mumbai city
var Employee = /** @class */ (function () {
    function Employee(ID, name, city, doj) {
        this.ID = ID;
        this.Name = name;
        this.City = city;
        this.DOJ = doj;
    }
    return Employee;
}());
var employeList = [];
employeList.push({ ID: 1, Name: "Name1", City: "City1", DOJ: new Date("11/11/2021") });
employeList.push({ ID: 2, Name: "Name2", City: "City2", DOJ: new Date("11/12/2021") });
employeList.push({ ID: 3, Name: "Name3", City: "City3", DOJ: new Date("11/13/2021") });
employeList.push({ ID: 4, Name: "Name4", City: "City4", DOJ: new Date("11/14/2021") });
employeList.push({ ID: 5, Name: "Name5", City: "City5", DOJ: new Date("11/15/2021") });
console.log("Employee List");
console.log(employeList);
// Search the employee with ID.
console.log("Employee whose ID is 2");
employeList.filter(function (e) {
    if (e.ID == 2) {
        console.log("ID:- ".concat(e.ID, " ,Name:- ").concat(e.Name, ", City:- ").concat(e.City, ", DOJ:- ").concat(e.DOJ));
    }
});
// Search the employees who has joined after year 2020
console.log("Employee who joined after 2020");
employeList.filter(function (e) {
    if (e.DOJ.getFullYear() > 2020) {
        console.log("ID:- ".concat(e.ID, ", Name:- ").concat(e.Name, ", City:- ").concat(e.City, ", DOJ:- ").concat(e.DOJ));
    }
});
// Search the employee who has joined after year 2020 and stays in Mumbai city
console.log("Employee who joined after 2020 and stay in Mumbai");
employeList.filter(function (e) {
    if ((e.DOJ.getFullYear() > 2020) && (e.City == "Mumbai")) {
        console.log("ID:- ".concat(e.ID, ", Name:- ").concat(e.Name, ", City:- ").concat(e.City, ", DOJ:- ").concat(e.DOJ));
    }
});
