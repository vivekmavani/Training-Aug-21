var myName = "Alice";
// Parameter type annotation
function greets(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
//Return Type Annotations
function getFavoriteNumbers() {
    return 26;
}
// No type annotations here, but TypeScript can spot the bug
var names = ["Alice", "Bob", "Eve"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var value = names_1[_i];
    console.log(value);
}
greets(myName);
getFavoriteNumbers();
