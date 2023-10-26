// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.org/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()

fetch('https://pokeapi.co/api/v2/pokemon-species/aegislash').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})