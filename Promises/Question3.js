console.log("Program Started");
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
         resolve()
    }, 3000);
    setTimeout(() => {
        reject()
    }, 2000);
}).catch(()=>{
    console.log("error have");
})
console.log(promise1);
console.log("porgramm is progress...");

promise1
.then(()=>{
    console.log("Program is complete");
})
.catch(()=>{
    console.log("Program is Failure");
})