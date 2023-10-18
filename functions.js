// Default Parameters Values

function multiply(a, b=0){
    return (2* (a + b));
}
multiply(3);

// Rest Parameters
// function diffination can have only one rest parameter for example (...y)
// Rest parameters must be the last parameter
function collectThings(a, ...y){ 
    console.log(a);
    console.log(y);
}
collectThings(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
