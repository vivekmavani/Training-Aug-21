const { isDate } = require("util/types");

//Write a JavaScript function to check whether a string is blank or not
var s = "vivek mavani"
var length = 2;
console.log(stringblank(s));
//Write a JavaScript function to split a string and convert it into an array of words
console.log(splitstring(s));
//Write a JavaScript function to extract a specified number of characters from a string.
console.log(extract(s,length));
//Write a JavaScript function to get the current date
console.log(new Date());
//Try some operation with list like push, pop, shifting, deleting element
var array = ['Apple', 'Banana'];
console.log(list(array));


//Assignment
//Date entered by the user should be checked for whether it is a Valid Date or not.
var date = new Date();
console.log(isDate(2002));
var dateString = "02-02-2020";
//Entered date should be in “”MM-DD-YYYY”” format. Display the Date Format along with the Text Box.
//You are required to perform following checks :
//– Entered characters should be digits only.
//console.log("characters should be digits only: " +/^\d+$/.test(datestring));
//– Month should be within the range 1 to 12.
// Days should be within the range 1 to 31.
//Check the entered Days and its corresponding Month.
console.log("date validation is : "+isValidDate(dateString));

function list(array)
{ 
          array.push("Banana2");
          console.log("push " + array);
          array.pop();
          console.log("pop " + array);
          array.shift();
          console.log("shift " + array);
          array.unshift('Strawberry');
          console.log("unshift " + array);
          var pos =  array.indexOf('Banana');
          console.log("indexOf " + pos);
          array.splice(pos, 1);
          console.log("splice " + array);
          return array;
}


function extract(s)
{
    if ((s.constructor === String) && (length>0)) {
        return s.slice(0, length);
    }
}

function splitstring(s){
  return s.split(' ');
}


function stringblank(s) 
{
  return  s.length == 0 ? "String is blank" : "String is not blank";
}

function isValidDate(dateString)
{
    // First check for the pattern
    if(!/^\d{1,2}\-\d{1,2}\-\d{4}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("-");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};