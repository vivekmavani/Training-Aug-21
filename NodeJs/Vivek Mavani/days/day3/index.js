// Practice Exercise:
// 1. Create hello.js file and exports a value of constant variable greeting=”Greeting of the day!!!” and load the same in index.js
var greeting =require("./hello");
console.log(greeting);
 // 2. Create Rectangle.js and compute AreaofRectangle and perimeter of Rectangle, and exports area and perimeter of rectangle
 var rectangle=require("./Rectangle");

  const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter length Number: ', (answer) => {
      resolve(parseInt(answer))
    })
  })
}
const question2 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Enter height Number: ', (answer) => {
        resolve(parseInt(answer))
      })
    })
  }
  const main = async () => {
    var l = await question1()
    var b =  await question2()
    rl.close()
    rectangle.AreaofRectangle(l,b);
}
main()

// Assignment

// Rambo Rental Bikes is looking for developing a system to calculate the rentals of the bikes. System should accept the customer details, bike details and calculate the rental charges.

//  DESCRIPTION OF PROJECTS

// System allows users to add customer details with bike rented. It computes rent for each customer. Systems displays the Bike details with summation of days of hire and rental payment.   FUNCTIONALITY AND TASK

// Define a class called Mobike with the following description: 

// Instance variables/data members: 

// BikeNumber – to store the bike’s number

// PhoneNumber – to store the phone number of the customer

// Name – to store the name of the customer
// Days – to store the number of days the bike is taken on rent o charge – to calculate and store the rental charge

// Member methods:

// void Compute( )

// – to compute the rental charge

// Bike No.         PhoneNo             No. of days         Charge

//  The rent for a mobike is charged on the following basis:

// First five days Rs 500 per day

// Next five days Rs 400 per day

// Rest of the days Rs 200 per day

// Rambo Rental Bikes is looking for developing a system to calculate the rentals of the bikes. 
// System should accept the customer details, bike details and calculate the rental charges. 
// DESCRIPTION OF PROJECTS System allows users to add customer details with bike rented. 
// It computes rent for each customer. Systems displays the Bike details with summation of
//  days of hire and rental payment. FUNCTIONALITY AND TASK Define a class called Mobike with
//   the following description: Instance variables/data members: BikeNumber – to store the 
//   bike’s number PhoneNumber – to store the phone number of the customer Name – to store 
//   the name of the customer Days – to store the number of days the bike is taken on rent o 
//   charge – to calculate and store the rental charge Member methods: void Compute( ) – to
//    compute the rental charge Bike No. PhoneNo No. of days Charge The rent for a mobike is
//     charged on the following basis: First five days Rs 500 per day Next five days Rs 400 per day R


const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
var mobike=require("./Mobike");
const question5 = () => {
    return new Promise((resolve, reject) => {
        r2.question('Enter Number of data: ', (answer) => {
        resolve(parseInt(answer))
      })
    })
  }
  const question6 = (value) => {
    return new Promise((resolve, reject) => {
        r2.question(value, (answer) => {
        resolve(answer)
      })
    })
  }
  var lists= [];
  const mains = async () => {
    var l = await question5()
    for(var i = 0;i< l;i++)
    {
        var a =  await question6('Enter BikeNumber: ')
        var b =  await question6('Enter PhoneNumber: ')
        var c =  await question6('Enter Name: ')
        var d =  await question6('Enter Days: ')
        lists.push(new mobike(a, b,c,d,0));
    }
    r2.close()
     for(var i = 0;i<lists.length;i++)
     {
         var getrent = lists[i].Compute;
         console.log("---------------------------");
         console.log("BikeNumber: " + getrent.BikeNumber);
         console.log("PhoneNumber: " +getrent.PhoneNumber);
         console.log("Name: " +getrent.Name);
         console.log("Days: " +getrent.Days);
         console.log("Charge: " +getrent.Charge);
         console.log("---------------------------");
     }
}
mains()
