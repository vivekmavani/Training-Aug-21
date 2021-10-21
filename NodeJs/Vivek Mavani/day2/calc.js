//calculatefunction.js
var calc = {
    add: function (a,b) { 
        c=a+b;
        console.log('Addition is : ' + c);
    },
    sub:function (a,b) { 
        console.log('Substraction is: ' + a-b);
    },
    multi:function (a,b) { 
        console.log('Multiplication is : ' + a*b);
    },
    div : function (a,b){
        console.log('Division is : ' + a/b); 
    }
};
module.exports = calc
