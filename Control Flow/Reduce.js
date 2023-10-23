// const myNums = [1,2,3,4,5];

// const myTotal = myNums.reduce( (acc, currVal) => acc+currVal, 0)

// console.log(myTotal);


const laptops = [
    {
        itemName: "HP",
        price: 40000,
        model: "840g1"
    },
    {
        itemName: "DELL",
        price: 50000,
        model: "8g1"
    },
    {
        itemName: "ACER",
        price: 20000,
        model: "8d4"
    },
    {
        itemName: "MAC",
        price: 344000,
        model: "3rd gen"
    },
]

// const TotalItmesPrice = laptops.reduce( (acc, items) => acc+items.price, 0)
// const findItems = laptops.filter( (item1) => item1 == "ACER" )
// let item1 = ''

// console.log(findItems);
// console.log(TotalItmesPrice);
for (let i = 0; i < laptops.length; i++) {
    const laptop = laptops[i];
    console.log(`Laptop Name: ${laptop.itemName}, Price: ${laptop.price}, Model: ${laptop.model}`);
}