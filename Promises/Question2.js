// Promise.race:

// Create two Promises, one that resolves after 4 seconds and another that resolves after 2 seconds. 
// Use Promise.race to log the result of the Promise that resolves first.
const promis1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let myName= "Muhammad Adnan"
        resolve(myName)
        console.log(myName);
    }, 4000);
})
const promis2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let myName= "Muhammad Adnan"
        resolve(myName)
        console.log(myName);
    }, 2000);
})
Promise.race([promis1, promis2]).then((value) => {
    console.log(value);
  });