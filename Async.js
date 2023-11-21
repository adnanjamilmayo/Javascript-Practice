// // // // setTime()
// // // const sayAdnan = () => {
// // //     console.log("Adnan Jamil");
// // // }
// // // const changeText = () => {
// // //     document.querySelector('h1').innerHTML = "My Name is Muhamamd Adnan"
// // //     console.log(changeMe())
// // // }

// // // const changeMe = setTimeout(changeText() , 2000)

// // // document.querySelector('#stop').addEventListener('click', () =>{
// // //     clearTimeout(changeMe)
// // //     console.log("stoped")
// // // })

// // async function fetchData(){
// //     const result = await fetchData('https://api.example.com/data')
// //     const data = await result.json();
// //     console.log(data);
// // } catch (eror){

// // }

// // async function is always return promises

// async function test(){

//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const data = await response.json()

//     return data

// }
// test().then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })
// async function newData(){
//     const apiData = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const data = await apiData.json()

//     return data
// }
// newData().then((res)=>{
//     console.log(res);
// }).catch((eror)=>{
//     console.log(eror);
// })

async function multipleAPi(){
    const newApi = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json")
    const currencyData = await newApi.json()
    return currencyData
}
multipleAPi().then((res)=>{
    console.log(res);
})