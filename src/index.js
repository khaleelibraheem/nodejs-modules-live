// let num1 = parseInt(process.argv[2]);
// let num2 = parseInt(process.argv[3]);
// let result = num1 + num2;


// console.log(`The sum of ${num1} and ${num2} is ${result}`)
function add(x, y){
    return x + y;
}

function multiply(x, y){
    return x * y;
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let items = [
    {
        "name": "cornflakes",
        "price": 10000,
        "discount": 10,
        "quantity": 12
    },

    {
        "name": "biscuit",
        "price": 100,
        "discount": 2,
        "quantity": 5
    },

    {
        "name": "lays",
        "price": 50,
        "discount": 5,
        "quantity": 3
    }
];
items.forEach(function(item){
   console.log(item.name + " is " + "$" + item.price + " and a discount of " + item.discount + "%")
})




module.exports = {add, multiply};
