var name = "Muhammad Adnan"
var num = 12;

let arr = ["Adnan", 12, "12hdh"]
console.log(arr.length);

console.log(arr[1]);
arr.push("ali")
console.log(arr);

function numbers(num1, num2){
    return num1 + num2
}

console.log(numbers(12,12));


const greeting = function(name){
    return "hello," + name +"!"
}

const messsage = greeting("Muhammad")

console.log(messsage);

function squareNumber(num){
    return num*num
}

console.log(squareNumber(10));

let no;

if(no%2==0){
    console.log("this is even number");
}else{
    console.log("This is odd number");
}



for(let i=1; i<=5; i++){
    console.log(i);
}

let i = 1
while(i <= 3){
    console.log(i);
    i++;
}

const studentData = {
    name:"Muhamamd",
    id: 12,
    age: 21,
    city: "Lahore"
}
console.log(`${name}`);

var str = "Hello Jee"
var str2 = "Kya Hal Hai"


console.log(str + " " + str2);
console.log(str.length);
console.log(str.toUpperCase());

