// Practice Exercise:
// 1. Create one txt file name it as person.txt and write in that hello world
 var fs=  require('fs');
const path = require('path');
fs.writeFile('person.txt','hello world',function(err){
  if (err) throw err;
  console.log('person.txt is saved');
});
// 2. Append hello India in person.txt.
fs.appendFile('person.txt',' hello India',function(err){
    if (err) throw err;
    console.log('append success');
  });
// 3. Accept your name from command line. And append it to person.txt as “hello “+
// “name”.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
readline.question(`What's your name?`, name => {
  //  console.log(`Hi ${name}!`)
    fs.appendFile('person.txt',`hello ${name}`,function(err){
        if (err) throw err;
        console.log('your name append success');
      });
    readline.close()
  })
// 4. Create two txt files, write some dummy text. Read two file content and print it in the console. use async and await.
fs.writeFile('persontwo.txt','hello world 2',function(err){
    if (err) throw err;
    console.log('persontwo.txt is saved');
  });
 
  const doSomethingAsync = (filename) => {
    return new Promise(resolve => {
        try {
            const data = fs.readFileSync(filename, 'utf8')
            resolve(data);
          } catch (err) {
            console.error(err)
          }
    })
  }
  const doSomething = async (filename) => {
    console.log(await doSomethingAsync(filename));
  }
  
  console.log('person.txt Start');
  doSomething('person.txt');
  console.log('person.txt End');
  console.log('persontwo.txt Start');
  doSomething('persontwo.txt');
  console.log('persontwo.txt End');
// 5. Write your address in one txt file and find out how many consonants are there.
try {
    const data = fs.readFileSync('person.txt', 'utf8')

    const consonants = data.toString().match(/[^aeiou ]/gi);   
   // consonants.concat([''],vowels).forEach(k => { console.log(k); } );
   console.log(`consonants : ${consonants.length}`);
  } catch (err) {
    console.error(err)
  }

// 6. Remove person.txt file.
fs.unlink(destinationPath, function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

// 7. Create one folder files and move person.txt in that file.
const folderName = 'files'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}
const mv = require('mv');
const path = require("path");
const currentPath = path.join(__dirname, "person.txt");
const destinationPath = path.join(__dirname, "files", "person.txt");

mv(currentPath, destinationPath, function(err) {
     if (err) {
        throw err
    } else {
        console.log("Successfully moved the file!");
    }
});

// Assignment:

// Do mathematical operation like Addition, subtraction, multiplication, div.
// Use case statement.
// Accept two numbers from the user from the command line.
// Create Separate function for add, sub, multi and div
// And store the result in one txt file. And display the result from file.
var calc=require("./calc");

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter First Number: ', (answer) => {
      resolve(answer)
    })
  })
}
const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter Second Number: ', (answer) => {
      resolve(answer)
    })
  })
}
const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter Operator +,-,*,/ : ', (answer) => {
      resolve(answer)
    })
  })
}

const main = async () => {
 var a = await question1()
 var b =  await question2()
 var c =  await question3()
 switch(c){
            case '*': calc.multi(a,b);
            break;
            case '/': calc.div(a,b);
            break;
            case '+': calc.add(a,b);
            break;
            case '-': calc.sub(a,b);
            break;
            default: console.log('please enter valid operator');
           exit();
            break;
        }
  rl.close()
}
main()