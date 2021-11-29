

  interface GenericIdentityFn {
    <Type>(arg: Type): Type;
  }
   
  function identity<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity: GenericIdentityFn = identity;

  class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
  }
   
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };

  let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

namespace Validation {
    export interface StringValidator {
      isAcceptable(s: string): boolean;
    }
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    export class LettersOnlyValidator implements StringValidator {
      isAcceptable(s: string) {
        return lettersRegexp.test(s);
      }
    }
    export class ZipCodeValidator implements StringValidator {
      isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
      }
    }
  }
  // Some samples to try
  let strings = ["Hello", "98052", "101"];
  // Validators to use
  let validators: { [s: string]: Validation.StringValidator } = {};
  validators["ZIP code"] = new Validation.ZipCodeValidator();
  validators["Letters only"] = new Validation.LettersOnlyValidator();
  // Show whether each string passed each validator
  for (let s of strings) {
    for (let name in validators) {
      console.log(
        `"${s}" - ${
          validators[name].isAcceptable(s) ? "matches" : "does not match"
        } ${name}`
      );
    }
  }