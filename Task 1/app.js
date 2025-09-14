/* Scope 
var scope = "global"; // Declare a global variable
function checkscope() {
var scope = "local"; // Declare a local variable with the same name
return scope; // Return the local value, not the global one
}
checkscope()
*/
/*Let and const 
let age = 20;
console.log(age); // 20

age = 21; // re-assign
console.log(age); // 21

*/

/* Arro Function 
const power = (base, exponent) => {
    let result = 1;
for (let count = 0; count < exponent; count++) {
result *= base;
}
return result;
}

console.log(power(2,6)) */

/* Arrays
const fruits = ["apple", "banana", "orange"];

fruits.forEach(fruit => {
  console.log(fruit);
});
// Output: apple, banana, orange

const fruits = ["apple", "banana", "orange"];

const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);
// Output: ["APPLE", "BANANA", "ORANGE"]

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
// Output: 10

const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);
// Output: [2, 4, 6]
*/

/*
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);
*/