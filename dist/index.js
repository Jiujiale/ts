"use strict";
console.log('hello world');
let age = 25;
if (age < 50) {
    age += 10;
}
console.log('age: ', age);
let arr = [10, 'Mosh'];
let mySize = 2;
console.log(mySize);
function calculateTax(money, year) {
    if (year < 2022) {
        return money * 1.2;
    }
    return money * 1.3;
}
let employee = {
    id: 1,
    name: 'Mosh'
};
console.log(employee.id);
function kgTolbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
//# sourceMappingURL=index.js.map