// const promisOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("This task is complete");
//         resolve()
//     }, 1000)
// }).catch((error)=>{
//     console.log(error);
// })

// // .then method is dicrectly connect with only resolve
// // promisOne.then(function(){
// //     console.log("promis consumed");
// // })

// // const todayChaiPlan = new Promise(function(resolve, reject){
// //     setTimeout(() => {
// //         let wada = true
// //         let wada2 = false
// //         if(!wada && wada2){
// //             console.log("wada is done");
// //         }else{
// //             reject("wada in not done")
// //         }
// //     }, 2000);
// // })
// // todayChaiPlan().then().catch()

// const promis1 =new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(5)
//     },1000)
// })
// const promis2 = promis1.then((value)=>{
//     let constVal = value * value
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(constVal)
//         }, 2000);
//     });
// });

// promis2.then((result)=>{
//     console.log("Final Result:", result);
// })


const newpromisAgain = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({username: "Muhamad Adnan", id: "123"})
        }else{
            reject("error have something")
        }
    }, 1000)
})