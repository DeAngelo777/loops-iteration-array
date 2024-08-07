// Add all of the positive numbers in the array
// Chalenge 2
const numbers = [2, -30, 58, 20, -12, -9, 7];

// console.log(numbers);


const positiveSum = numbers;

const newNumbers = numbers
.filter((digits) => digits >= 0)
.reduce((acc, cur) => acc + cur,0);

console.log(newNumbers);

