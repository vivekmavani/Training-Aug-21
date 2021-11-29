let map = new Map();  
  
map.set('1', 'abhishek');     
map.set(1, 'www.javatpoint.com');       
map.set(true, 'bool1');   
map.set('2', 'ajay');  
  
console.log( "Value1= " +map.get(1)   );   
console.log("Value2= " + map.get('1') );   
console.log( "Key is Present= " +map.has(3) );   
console.log( "Size= " +map.size );   
console.log( "Delete value= " +map.delete(1) );   
console.log( "New Size= " +map.size );  

let ageMapping = new Map();  
   
ageMapping.set("Rakesh", 40);  
ageMapping.set("Abhishek", 25);  
ageMapping.set("Amit", 30);  
   
//Iterate over map keys  
for (let key of ageMapping.keys()) {  
    console.log("Map Keys= " +key);          
}  
//Iterate over map values  
for (let value of ageMapping.values()) {  
    console.log("Map Values= " +value);      
}  
console.log("The Map Enteries are: ");   
//Iterate over map entries  
for (let entry of ageMapping.entries()) {  
    console.log(entry[0], entry[1]);   
}  


let studentEntries = new Set();  
   
//Add Values  
studentEntries.add("John");  
studentEntries.add("Peter");  
studentEntries.add("Gayle");  
studentEntries.add("Kohli");   
studentEntries.add("Dhawan");   
  
//Returns Set data  
console.log(studentEntries);   
   
//Check value is present or not  
console.log(studentEntries.has("Kohli"));        
console.log(studentEntries.has(10));        
   
//It returns size of Set  
console.log(studentEntries.size);    
   
//Delete a value from set  
console.log(studentEntries.delete("Dhawan"));      
   
//Clear whole Set  
studentEntries.clear();   
  
//Returns Set data after clear method.  
console.log(studentEntries);  

let studentEntriess = new Set();  
   
//Chaining of add() method is allowed in TypeScript  
studentEntriess.add("John").add("Peter").add("Gayle").add("Kohli");  
  
//Returns Set data  
console.log("The List of Set values:");  
console.log(studentEntriess);  



let date: Date = new Date();  
console.log("Date = " + date); //Date = Tue Feb 05 2019 12:05:22 GMT+0530 (IST)  

let date1: Date = new Date(500000000000);  
console.log("Date = " + date1); //Date = Tue Nov 05 1985 06:23:20 GMT+0530 (IST)  

let date2: Date = new Date("2019-01-16");  
console.log("Date = " + date2); //Date = Wed Jan 16 2019 05:30:00 GMT+0530 (IST)  

let date3: Date = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);  
console.log("Date = " + date3); //Date = Tue Jun 05 2018 17:23:42 GMT+0530 (IST)  

let date4: Date = new Date(2017, 4, 4, 17, 23, 42, 11);  
date4.setDate(13);  
date4.setMonth(13);  
date4.setFullYear(2013);  
date4.setHours(13);  
date4.setMinutes(13);  
date4.setSeconds(13);  
console.log("Year = " + date4.getFullYear());  
console.log("Date = " + date4.getDate());  
console.log("Month = " + date4.getMonth());  
console.log("Day = " + date4.getDay());  
console.log("Hours = " + date4.getHours());  
console.log("Minutes = " + date4.getMinutes());  
console.log("Seconds = " + date4.getSeconds());  