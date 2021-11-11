var fs=  require('fs');
var express = require('express');
var app = express();
app.listen(3000);
const array = [];
try {
    const data = fs.readFileSync('resipient.txt', 'utf8').split(',');

    const email = data.toString().split(',');

   for(let i of email)
   {
   
    array.push(i);
   }
   console.log(`email : ${array}`);
  } catch (err) {
    console.error(err)
  }
app.get('/email/:emailid', (req, res) => {
    const email = array.find(c => c == req.params.emailid.toString());
    if (!email) return res.status(404).send('The person with given email was not found');
    res.send(`hello, ${email} your email`);

});
