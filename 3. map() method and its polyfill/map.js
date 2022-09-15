// 1. map() in JavaScript is a higher order function which can be available to all JavaScript arrays.
// 2. It receives a callback as a parameter and performs operation on each element of the array.
// 3. The callback in the map() method receives 3 parameters (current value, current index, and the array itself).
// 4. It does not modify the original array and returns a new array instead.

// Example of map() method
// Suppose we want each element of an array to be multiplied by 2.

let arr = [1, 2, 3, 4, 5];
let result = arr.map((val, index, array) => {
  return val * 2;
});

console.log(result); // [ 2, 4, 6, 8, 10 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]
