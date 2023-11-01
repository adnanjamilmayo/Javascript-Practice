// Find the remainder of dividing two numbers and check if it's even.
// let num1 = 16;
// let num2 = 4;

// let result = num1 / num2;
// if (result%2 === 0) {
//     console.log("this is even number");
// }else{
//     console.log("not even");
// }

// Create a simple calculator using a switch statement that can perform addition, subtraction, multiplication, and division.

function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    if (y !== 0) {
      return x / y;
    } else {
      return "Division by zero is not allowed.";
    }
  }
  
  function calculator(operation, num1, num2) {
    let result;
  
    switch (operation) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        result = divide(num1, num2);
        break;
      default:
        result = "Invalid operation.";
    }
  
    return result;
  }
  
  let operation = "+";
  let num1 = 5;
  let num2 = 3;
  let result = calculator(operation, num1, num2);
  console.log(`The result is: ${result}`);
  