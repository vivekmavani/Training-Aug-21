/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
//Union Types
 function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
  }
   
  padLeft("Hello world", 4); // returns "    Hello world"

   
//Discriminating Unions
  type NetworkLoadingState = {
    state: "loading";
  };
  type NetworkFailedState = {
    state: "failed";
    code: number;
  };
  type NetworkSuccessState = {
    state: "success";
    response: {
      title: string;
      duration: number;
      summary: string;
    };
  };
  // Create a type which represents only one of the above types
  // but you aren't sure which it is yet.
  type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

    function logger(s: NetworkState):string {
        switch (s.state) {
          case "loading":
            return "loading request";
          case "failed":
            return `failed with code ${s.code}`;
          case "success":
            return "got response";
        }
      }
      logger({
        state: "failed",
        code: 12
      });

      //Classes
      class Greeter {
        greeting: string;
       
        constructor(message: string) {
          this.greeting = message;
        }
       
        greet() {
          return "Hello, " + this.greeting;
        }
      }
       
      let greeter = new Greeter("world");

//Inheritance
      class Animal {
        move(distanceInMeters: number = 0) {
          console.log(`Animal moved ${distanceInMeters}m.`);
        }
      }
       
      class Dog extends Animal {
        bark() {
          console.log("Woof! Woof!");
        }
      }
       
      const dog = new Dog();
      dog.bark();
      dog.move(10);
      dog.bark();

      // abstract class
      abstract class Department {
        constructor(public name: string) {}
       
        printName(): void {
          console.log("Department name: " + this.name);
        }
       
        abstract printMeeting(): void; // must be implemented in derived classes
      }
       
      class AccountingDepartment extends Department {
        constructor() {
          super("Accounting and Auditing"); // constructors in derived classes must call super()
        }
       
        printMeeting(): void {
          console.log("The Accounting Department meets each Monday at 10am.");
        }
       
        generateReports(): void {
          console.log("Generating accounting reports...");
        }
      }
       
      let department: Department; // ok to create a reference to an abstract type
      department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
      department.printName();
      department.printMeeting();

      //Using a class as an interface
      class Point {
        x: number;
        y: number;
      }
       
      interface Point3d extends Point {
        z: number;
      }
       
      let point3d: Point3d = { x: 1, y: 2, z: 3 };

      //Enums
      enum Direction {
        Up =1 ,
        Down,
        Left,
        Right,
      }

      //Functions
      // Named function
function add(x, y) {
    return x + y;
  }
   
  // Anonymous function
  let myAdd = function (x, y) {
    return x + y;
  };

  interface SquareConfig {
    color?: string;
    width?: number;
  }
   
  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
   
  let mySquare = createSquare({ color: "black" });