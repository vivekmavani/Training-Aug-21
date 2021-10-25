
var fs=  require('fs');
var calc = {
    add: function (a,b) { 
        c=a+b;
        fs.appendFile('person.txt',`\n Addition is : ${a+b}`,function(err){
            if (err) throw err;
            console.log('your name append success');
          });
      //  console.log('Addition is : ' + c);
    },
    sub:function (a,b) { 
        //console.log('Substraction is: ' + a-b);
        fs.appendFile('person.txt',`\n Substraction is: ${a-b}`,function(err){
            if (err) throw err;
            console.log('your name append success');
          });
    },
    multi:function (a,b) { 
        //console.log('Multiplication is : ' + a*b);
        fs.appendFile('person.txt','\n Multiplication is : ' + a*b,function(err){
            if (err) throw err;
            console.log('your name append success');
          });
    },
    div : function (a,b){
      //  console.log('Division is : ' + a/b); 
        fs.appendFile('person.txt','\n Division is : ' + a/b,function(err){
            if (err) throw err;
            console.log('your name append success');
          });
    }
};
module.exports = calc
