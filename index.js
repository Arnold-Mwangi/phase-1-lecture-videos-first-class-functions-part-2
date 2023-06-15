const books = [
    {
        title: "How to become A Man",
        inventory: 8,
        price: 2000
    },
    {
        title: "Why Most Boys Are not Becoming Men",
        inventory: 13,
        price: 1500
    },
    {
        title: "Js for Beginners",
        inventory: 15,
        price: 5000

    },
    {
        title: "Python Fundamentals",
        inventory: 2,
        price: 5600
    }
]

function printLibraryReport(callback){
    console.log(callback(books))
}

function totalInventory(array){
    total = 0;
    for(let item of array){
        total+=item.inventory
        
    }
    return ` Their are a total of ${total} book(s) in the store`
}
function makeOrder(array){
    let orders = [];
    for(let item of array){
        if(item.inventory <= 5){
            orders.push(item.title)
        }
        
    }
    return `Make an order for the following book(s): ${orders.join(``)}`
}
printLibraryReport(totalInventory)
printLibraryReport(makeOrder)