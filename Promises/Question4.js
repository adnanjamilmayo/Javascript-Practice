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

promise1.then(()=>{
    console.log("Step 1 completed");
})
promise1.then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("step two completed");
        },3000)
    })
})
secondPromis()
