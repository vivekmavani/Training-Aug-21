

//Define a function called callback which receives an argument and prints the square of that number.
var a = 2;
squares(a,(c)=>{
    console.log("a^2 = "+c);
})

function squares(a,callback)
{
    callback(a * a);
}
//Explain difference between var and let keyword using example.
var b = 10;
if(true)
{
   var b = 20;
    console.log("Using var keyword in if condition: value is updated 10 to 20:  "+b);
} 
console.log("Using var keyword outside the  if condition: "+b);

var d = 10;
if(true)
{
   let d = 20;
    console.log("Using let keyword in if condition(local scope):let d=  "+d);
} 
console.log("Using let keyword outside if condition(globle scope): "+d);

//Make a function that takes in a single parameter and returns a new promise. using setTimeout,
 //after 500 milliseconds, the promise will either resolove or reject. if the input is a string,
 // the promise resolves with that reverse string . if the input is anything but a string it rejects
 //  with that same input call the function wrong Input
 //producer code.
 function stringpromise(data)
 {
    
     return new Promise((resolve,reject)=>{
         let successmessage= {
             status : 'success',
             message: 'this is a String  '+ data +' reverse String is : '+  data.split('').reverse().join(''),
         }
         let errormessage= {
            status : 'error',
            message: 'this is not a String',
        }
        if(typeof(data===String))
        {
      
         resolve(successmessage);
        }else
        {
          reject(errormessage);
       
        }
     })
 }

stringpromise("data").then(
    (successmessage)=>{
     console.log(successmessage);
    },
    (errormessage)=>{
        console.log(errormessage);
    },
)

// University of Mumbai needs to set an online exam for their students. For that they need to 
//set a timer for three hours. After 3 hours exams should be finished.
function myFunc(arg) {
    console.log(`exams is finished => ${arg}`);
  }
  setTimeout(myFunc, 300000, '3 hours');