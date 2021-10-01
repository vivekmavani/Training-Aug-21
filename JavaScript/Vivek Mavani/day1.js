//Accept three numbers from the user using prompt, find the greater of these the numbers and do 
//the sum of that numbers which are greater than 40.
var a = 10,b= 60, c = 50;
greater(a,b,c);
console.log("sum of that numbers which are greater than 40 : " +sum(a,b,c));

 function greater(a,b,c)
{
    if(a> b & a > c)
    {
        console.log("Greater number is: " +a);
    }else if(b > a && b > c)
    {
        console.log("Greater number is: " +b);
    }else{
        console.log("Greater number is: " +c);
    }
}

function sum(a,b,c) {
var sum = 0;
if(a > 40)
{
    sum+=a;
}
 if(b > 40){
  sum+=b;
}
 if(c > 40){
  sum+=c;
}
return sum;
}

// Declare array with 5 city names and iterate these values with the help of loop and display it with alert.
var arrays = Array("bhavnagar","ahmdabad","surat","jamnagar","baroda");
for(var i of arrays)
{
    console.log(i);
}

//calculator 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`insert operator`, op => {
    switch(op){
        case '*': console.log("Multiplication : " +mul(a,b));
        break;
        case '/': console.log("Division : "+ div(a,b));
        break;
        case '+': console.log("Addition : "+add(a,b));
        break;
        case '-': console.log("Subtraction "+sub(a,b));
        break;
        default: console.log('please enter valid operator');
        break;
    }
    readline.close()
  })

function add(a,b)
{
  return a+b;
}

function sub(a,b)
{
  return a-b;
}

function div(a,b)
{
  return a/b;
}

function mul(a,b)
{
  return a*b;
}
