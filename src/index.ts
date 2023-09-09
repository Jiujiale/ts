console.log('hello world');
let age: number = 25;
if (age < 50) {
    age += 10
}
console.log('age: ', age)

// tuple
let arr:[number, string] = [10, 'Mosh']

// enum
const enum Size {Small = 1 , Medium, Large}
let mySize: Size = Size.Medium
console.log(mySize)

// function
function calculateTax(money: number, year: number): number {
    if (year < 2022) {
        return money * 1.2
    }
    return money * 1.3
}