const promisOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("This task is complete");
        resolve()
    }, 1000)
})

// .then method is dicrectly connect with only resolve
promisOne.then(function(){
    console.log("promis consumed");
})