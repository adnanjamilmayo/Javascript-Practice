// // // // const departments = ["AI","library","Business","socialogy","english"]

// // // // const deprtlist= departments.filter( (deprtnamess) => {
// // // //     return deprtnamess => 2
// // // // })
// // // // console.log(deprtlist);

// // // const books = [
// // //     { name: 'ham tum', author: 'Author 1' },
// // //     { name: 'GOD is great', author: 'Author 2' },
// // //     { name: 'tum or mein', author: 'Author 3' },
// // //     { name: 'alina', author: 'Author 4' },
// // //     { name: 'Book heavy', author: 'Author 5' }
// // //   ];

// // //   const data = books.filter((bk) => bk.name === 'alina')
// // //   console.log(data)


// // // Write a function that takes an array of numbers and uses
// // //  the filter method to return a new array containing only the even numbers.

// // const evenNumbers = (arr) => {
// //     return arr.filter(number => number % 2 === 0);
// // }


// const numbers  = [1,2,3,4,5,6,7,8,9,10];

// // const newAll = numbers.map( (num) => {
// //     const newnumber = num + 1100
// //     return newnumber
// // })
// // console.log(newAll);


// const AddNumberss = numbers.forEach( (num) => {
//      return num +19
    
// })
// console.log(numbers);






//    Chaining

const numbers  = [1,2,3,4,5,6,7,8,9,10];

const newNums = numbers.map( (num) => num * 10)
.filter( (num) => num >= 2 )

console.log(newNums);
