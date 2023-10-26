// setTime()
const sayAdnan = () => {
    console.log("Adnan Jamil");
}
const changeText = () => {
    document.querySelector('h1').innerHTML = "My Name is Muhamamd Adnan"
    console.log(changeMe())
}

const changeMe = setTimeout(changeText() , 2000)

document.querySelector('#stop').addEventListener('click', () =>{
    clearTimeout(changeMe)
    console.log("stoped")
})
