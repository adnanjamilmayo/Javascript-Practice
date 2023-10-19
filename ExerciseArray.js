const personDetails = [
    {
        name: "Muhammad Adnan",
        id: 41,
        age: 25,
        department: "sst",
        city: "sialkot"
    },
    {
        name: "Muhammad Ali",
        id: 42,
        age: 34,
        department: "bba",
        city: "lahore"
    },
    {
        name: "Haseeb Ali",
        id: 34,
        age: 23,
        department: "llb",
        city: "multan"
    }
]

const names = personDetails.map(ch => ch.name)
console.log(names);

const deprt = personDetails.map((ca) => {
    return ca.department
})
console.log(deprt)