// // Object

// const product = {
//     itemName: "phone",
//     price: 35000,
//     discount: 5000,
//     itemCode: "F40"
// }

// // factory fucntion

// function createProduct(name, price, discount, itemCode){
//     return {
//         itemCode: name,
//         price: price,
//         discount: discount,
//         itemCode: itemCode
//     }
// }

// const footBall = createProduct("footBall", 4000, 1000, "f20")
// console.log(footBall);

// // constructer function

// function Product(name, price, discount, itemCode){
//     this.itemCode = name;
//     this.price = price;
//     this.discount = discount;
//     this.itemCode = itemCode;
//     this.discountValue = function(){
//         return price * discount/100;
//     }
// }

// const samsungPhone = Product("samsungA30", 3400, 900, "y7")

// console.log(samsungPhone);

const users = [
    { name: "Alice", age: 30, email: "alice@example.com" },
    { name: "Bob", age: 25, email: "bob@example.com" },
    { name: "Charlie", age: 35, email: "charlie@example.com" },
  ];
  
  function extractEmails(users) {
    // Your code here
  }
  
  const emails = extractEmails(users);
  console.log(emails);