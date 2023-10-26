// // function sum(name, adress, ...args){
// //     console.log(arguments);

// //     console.log(`My Name is: ${name} and my adress is: ${adress}`);
// //     let sum =0;
// //     for (let  i in args) {
// //         sum += args[i]
// //     }
// //     console.log(sum);
// // }

// // sum("Muhammad Adnan","Pakistan",12,34,32)


// function findLargest(...numbers) {
//     let largest = -Infinity;
    
//     for (let number of numbers) {
//       if (number > largest) {
//         largest = number;
//       }
//     }
    
//     console.log(largest);
//   }
  
//   findLargest(12,3,2,32,32,3,2,3232323)

// Write a function concatenateStrings that takes an arbitrary number of string arguments and returns a single string 
//by concatenating all the input strings with a space in between.

const concatenateStrings =(string, string1, ...args) =>{
    let str = ""
    
    for (let i in args){
        let inputString = i + args
        console.log(`${string}, ${string1}, ${inputString}`);
    }
    console.log(str);
}

concatenateStrings("Hello","Adnan", "Jamil")