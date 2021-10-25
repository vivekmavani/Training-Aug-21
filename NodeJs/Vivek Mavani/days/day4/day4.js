//1.Write a Nodejs server that listen on port 3001 and which will read person.json
// and return a response in JSON format.
  //http://localhost:3001
//2. Write a Nodejs server that serves as a RESTFUL API that takes two
// parameters in a GET call and produces their sum.
 //http://localhost:3001/product?param1=5&param2=10
//3. Write a Nodejs server that serves as a RESTFUL API that accepts 
//a string as an input name and returns the first vowel character from the string.
 //http://localhost:3001/vowefind?input=rita
//  4. Write a Nodejs server that serve as a RESTFUL API that accepts 
//  a file content and writes them to the disk.
// http://localhost:3001/upload
var http = require('http');
var list = require('./person');
http.createServer(function (req, res) {
    var url = require('url');
var q = url.parse(req. url, true);

switch(q.pathname)
{
    case '/':
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(list));
        res.end();
        break;
        case '/product':
            res.writeHead(200, {'Content-Type': 'text/html'});
            console.log(q.host); //returns 'localhost:8080'
            console.log(q.pathname); //returns '/product'
            console.log(q.search); //returns '?year=2020&month=february'
            var qdata = q.query; //returns an object: { param1: 5, param2: 10 }
            var ans=  parseInt(qdata.param1) +  parseInt(qdata.param2);
            res.write(`${qdata.param1} + ${qdata.param2} =  ` + ans.toString());
            res.end();
            break;
            case '/vowefind':
                res.writeHead(200, {'Content-Type': 'text/plain'});
                var qdata = q.query;
                res.write(`${qdata.input} first vowel character is: ` + qdata.input.match(/[aeiou]/gi)[0]);
                res.end();
            break;
                case '/upload':
                const fs = require('fs')
                const path = require('path');
                const currentPath = path.join(__dirname, "textfile.txt");
                try {
                  const data = fs.readFileSync(currentPath, 'utf8')
                  res.writeHead(200, {'Content-Type': 'text/plain'});
                var qdata = q.query;
                if (typeof localStorage === "undefined" || localStorage === null) {
                    var LocalStorage = require('node-localstorage').LocalStorage;
                    localStorage = new LocalStorage('./scratch');
                  }
                  localStorage.setItem('myFirstKey', data);
              res.write(localStorage.getItem('myFirstKey'));
                res.end();
                } catch (err) {
                  console.error(err)
                }
                break;
}
}).listen(3001);
