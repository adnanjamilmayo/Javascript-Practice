let myDate = new Date();

console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());

const currentDate = new Date();

console.log(currentDate.getFullYear());
console.log(currentDate.getMilliseconds());


function dateDifference(startDate, endDate) {
    const timeDifference = endDate - startDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    return { days, hours, minutes, seconds };
  }
  
  const startDate = new Date('2023-01-01');
  const endDate = new Date();
  console.log(dateDifference(startDate, endDate));