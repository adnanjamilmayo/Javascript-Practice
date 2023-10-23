// // // // forEach is a callback fucntion 


// // // const coding = ["js", "ruby", "java", "ts", "python", "ml", "dl"]

// // // // we are write bsic write function below
// // // // coding.forEach( function name() {

// // // // })

// // // // now we are write callback function below
// // // // coding.forEach( function (items) {
// // // // console.log(items);
// // // // })

// // // // calback function with arrow function

// // // coding.forEach( (val) => {
// // //     console.log(val);
// // // })

// // //Question 01: Write a function that takes an array of numbers and uses forEach to print each number to the console

// // const printNumbers = (arr) => {
// //     arr.forEach(number => {
// //       console.log(number);
// //     });
// //   }

// //   const newNumbers = [1,2,3,4,5,6,6]
// //   printNumbers(newNumbers)

// //Question 02: Write a function that calculates the sum of all the numbers in an array using forEach.

// const sumOfNumbers = (arr) =>{
//     let sum = 0;
//     sumOfNumbers.forEach( (number) =>{
//         sum += number;
//     });
//     return sum;
// }

// const addingNumbers = [1,2,3,4,5,5,6];
// const result = sumOfNumbers(addingNumbers)
// sumOfNumbers(result)


//Question No 03:Write a function that takes an array of numbers, squares each number, 
// and stores the squared values back in the original array using forEach

// const squaredNumbers = (arr) =>{
//     squaredNumbers.forEach((number, index) => {
//         arr[index] = number * number;
//       });
//     }
//     const newarr = [1,2,3,4,5,5,6];
//     const result = squaredNumbers(newarr)
//     console.log(result);
const squareNumbersInPlace = (arr) => {
    arr.forEach((number, index) => {
      arr[index] = number * number;
    });
  }
  
  const numbers = [1, 2, 3, 4, 5];
  squareNumbersInPlace(numbers);
  console.log(numbers);
  