// Promise.all:
// Create three Promises that resolve after 2 seconds, 3 seconds, and 5 seconds, respectively.
//  Use Promise.all to wait for all of them to resolve and then log an array with their results.
const promis1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({username: "Muhamad Adnan", id: "123"})
        }else{
            reject("error have something")
        }
    }, 1000)
})
const promis2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({username: "Ali", id: "1ewd23"})
        }else{
            reject("error have something 2")
        }
    }, 2000)
})
const promis3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({username: "Muhamad", id: "123dewed"})
        }else{
            reject("error have something 3")
        }
    }, 3000)
})
Promise.all([promis1,promis2,promis3]).then((value)=>{
    setTimeout(()=>{
        console.log(value);
    },5000)
    
})
async function promis(){
    const response = await promis3
    console.log(response);
}