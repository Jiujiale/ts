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

// object
let employee: {
    readonly id: number,
    name: string
} = {
    id: 1,
    name: 'Mosh'
}

console.log(employee.id)

// union type 
function kgTolbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}