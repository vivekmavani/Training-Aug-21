let myName: string = "Alice";
// Parameter type annotation
function greets(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }
  //Return Type Annotations
  function getFavoriteNumbers(): number {   
    return 26;
  }
  // No type annotations here, but TypeScript can spot the bug
let names : Array<string> = ["Alice", "Bob", "Eve"];
 
for(var value of names)
{
 console.log(value);
}
greets(myName);
getFavoriteNumbers();