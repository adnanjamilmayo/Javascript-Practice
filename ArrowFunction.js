const user = {
    name: "Muhammad Adnan",
    price: 100,

// "This" is reffer a current context
    welcomeMessage: function() {
        console.log(`${this.name}, welcome to the website` )
    }
}
user.welcomeMessage()

// in browser object is called window object

// Arrow Function

const addTwoNumbers = (num1, num2) => num1 + num2;
console.log(addTwoNumbers(44, 44));

// create an object
const addTwo1Numbers = (num1, num2) => ({username: "adnan"});

const square = (num1) => {
    return num1*2
}
console.log(square(2));

const ReturnOnly = () =>{
    return "Hello Worlds"
}
console.log(ReturnOnly("Hello World"));



const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});