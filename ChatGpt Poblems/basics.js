// Declare a variable using var, let, and const with the name 'age' and assign your age to it.
// Print the values of all three variables.

// Your code here:

var age = 26;
let name = "Muhammad Adnan"
const id = 12;

console.log(age);


// Create a function called 'calculateArea' that takes the length and width of a rectangle as parameters.
// Inside the function, declare a variable using var, let, and const with the name 'area' and calculate the area of the rectangle.
// Print the value of 'area' inside the function.

// Your code here:

function calculateArea(length, width) {
    // Using var
    var areaVar = length * width;
    console.log("Area using var:", areaVar);

    // Using let
    let areaLet = length * width;
    console.log("Area using let:", areaLet);

    // Using const
    const areaConst = length * width;
    console.log("Area using const:", areaConst);
}

// Example usage:
calculateArea(5, 8);

// Create an array called 'fruits' using var, let, and const and initialize it with three fruit names.
// Later, add two more fruits to the array and print the updated array.

// Your code here:

const fruits = ['mango', 'orange', 'grapes']

fruits.push('aam', 'ali')

console.log(fruits);

// Use a for loop to iterate over the elements of the 'fruits' array declared in Problem 4.
// Inside the loop, declare a variable using var, let, and const with the name 'currentFruit' and assign the current fruit to it.
// Print the value of 'currentFruit' inside the loop.

// Your code here:

let fruitsVar = ['apple', 'banana', 'orange', 'grape', 'watermelon'];

for (var i = 0; i < fruitsVar.length; i++) {
    var currentFruitVar = fruitsVar[i];
    console.log("Current fruit (var):", currentFruitVar);
}

// Create an object called 'person' using var, let, and const with properties for 'name', 'age', and 'city'.
// Assign values to these properties and print the object.

// Your code here:

const detail = {
    name: "Muhammad Adnan",
    age: 12,
    city: "Lahore Pakistan"
}
console.log(detail);

// Create a function called 'updateCity' that takes a person object as a parameter and updates the 'city' property.
// Print the updated person object outside the function.

// Your code here:

const person = {
    name: "Muhammad Adnan",
    age: 12,
    city: "Lahore Pakistan"
}

function updateCity(objperson, newCity){
    objperson.city = newCity
}

updateCity(person, "Sialkot")

console.log("Updated person object:", person);

// Declare a variable using let called 'counter' and initialize it with 0.
// Create a loop (using any type of loop) that increments 'counter' by 1 in each iteration.
// Run the loop 5 times and print the value of 'counter' after each iteration.

// Your code here:

 let counter = 0

 for (let i = 1; i < 5; i++) {
    counter++;
 }
 
 console.log(counter);
