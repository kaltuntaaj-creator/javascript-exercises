const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

function multiply(...numbers) {
  return numbers.reduce((product, current) => product * current, 1);
}

console.log(multiply(2, 3, 4)); // Output: 24
console.log(multiply(5, 10));   // Output: 50