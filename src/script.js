// const math = require('./index.js');
// const fs = require('fs');
// const data = fs.readFileSync('index.js', 'utf8');
// console.log(data)

// console.log(math);
// console.log(math.multiply(9, 10));

let cars = ['benz', 'camry', 'chevrolet', 'honda', 'toyota', 'lexus'];
// cars.forEach(function(x){
//     console.log(x);
// })
for(let car in cars){
    console.log(cars[car])
}