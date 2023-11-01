// // // Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// // function createHelloWorld() {
// //     return function() {
// //       return "Hello World";
// //     };
// //   }
// //   const sayHelloWorld = createHelloWorld();
// //   console.log(sayHelloWorld());


// // Given an integer n, return a counter function. This counter function initially 
// // returns n and then returns 1 more than the previous value 
// // every subsequent time it is called (n, n + 1, n + 2, etc).
// function createCounter(n){
//     let currentVal = n;
//     return function(){
//         currentVal += 1;
//         return currentVal;
//     }
// }

// const myCounter = createCounter(5);

// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());

function expect(val) {
    return {
      toBe: function(compareVal) {
        if (val !== compareVal) {
          throw new Error("Not Equal");
        }
        return true;
      },
      notToBe: function(compareVal) {
        if (val === compareVal) {
          throw new Error("Equal");
        }
        return true;
      },
    };
  }
  
  // Example usage:
  try {
    expect(5).toBe(5); // No error is thrown because 5 === 5
    expect(5).notToBe(10); // No error is thrown because 5 !== 10
  
    // These will throw errors:
    // expect(5).toBe(10); // "Not Equal" error
    // expect(5).notToBe(5); // "Equal" error
  } catch (error) {
    console.error(error.message);
  }
  