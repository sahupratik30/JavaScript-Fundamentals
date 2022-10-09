/* 
   1. filter() method is a higher order function in JavaScript which is available to all arrays in JavaScript.
   2. It receives a callback function as a parameter and performs the filtering based on the condition.
   3. It also receives a second parameter which is the "this" value passed to the function to be used as its this value.
   4. The callback in the filter() method receives 3 parameters (current value, current index, and the array itself).
   5. It returns a new array. 
*/

/* 
   Syntax
   array.filter(function(currentValue, index, arr), thisValue)
*/

// Example of filter() method
// Suppose we want to return the elements of an array which are greater than 3.

let arr = [2, 4, 6, 8, 10];
let result = arr.filter((val, index, array) => {
  return val > 3;
});

console.log(result); // [4, 6, 8, 10]
console.log(arr); // [2, 4, 6, 8, 10]
