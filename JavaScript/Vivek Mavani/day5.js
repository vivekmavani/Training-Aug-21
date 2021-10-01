//Using Function Expression, find the area of circle
var x = function (a){return 3.14 * a * a};
console.log("area of circle is: "+x(2));
//Using Function Constructor, find the area of rectangle
var rectangle = new Function("a","b","return a*b");
console.log("area of rectangle is: "+rectangle(2,3));
//Explain usage of Function Hosing using example
console.log("Function Hosing"+ myfuncation(4));
function myfuncation(z){
    return z *z;
}
//Using Function call create employee object with field Name, Address and Designation and pass it to function.
var employee1 = {
    fulldetails : function () {
        return this.name + " " + this.address +  " " + this.designation; 
    }
}
var employee = {
    name : "vivek",
    address : "bhavnagar",
    designation : "Flutter Developer"
}
console.log("Using Function call: " + employee1.fulldetails.call(employee));
//Using Function Apply pass employee object to a function defined in the function.
console.log("Using Function Apply: "+ employee1.fulldetails.apply(employee));
//Explain Function closure with practical
var counter = 0;
function add(){
   return counter+= 1;
}
console.log(add());
console.log(add());
console.log(add());
