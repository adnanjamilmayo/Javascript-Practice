// 1. Write a JavaScript program to display the current day and time.

function getCurrentDayAndTime() {
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-based
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    function padZeroes(value) {
        return value < 10 ? "0" + value : value;
    }

    const formattedDateTime = `${dayOfWeek}, ${day}/${month}/${year} ${hours}:${padZeroes(minutes)}:${padZeroes(seconds)}`;

    return formattedDateTime;
}

const currentDateTime = getCurrentDayAndTime();
console.log(currentDateTime); // You can use console.log to display the result in the browser's console.

