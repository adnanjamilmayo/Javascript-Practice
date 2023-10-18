const fruits = ["apple", "banana", "mango", "orange"];
const newFruits = fruits.slice(0, 3)

console.log(newFruits);
// ***********************************************8
function getLastNElements(arr, n){
    if(n => 0){
        return arr.slice(-n)
    }else{
        return ;
    }
}
const originalArry = [1,2,3,4,5,6];
const lastThreeElements = getLastNElements(originalArry, 3)

// console.log(lastThreeElements)
// **************************************************************
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 0, 6, 7);

console.log(numbers);

// *********************************************

function removeLastNElements(arr, n) {
    if (n >= 0) {
      arr.splice(-n, n);
    }
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  removeLastNElements(originalArray, 5);
  
  console.log(originalArray); // Output: [1, 2, 3]