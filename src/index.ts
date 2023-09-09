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