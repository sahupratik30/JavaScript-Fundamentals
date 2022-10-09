/* 
   1. reduce() is a higher order function in JavaScript which is available to all the arrays in JavaScript.
   2. It receives a callback function as a parameter and reduces the array to one single value based on the condition.
   3. The callback function receives 4 paramaters (accumulator, current value, current index, array itself) and returns on single value by reducing the array.
   4. It also receives a second parameter which an initial value for the accumulator.  
   5. It returns one single value.

   **Note:- If no initial value is provided to the accumulator then the initial value for the accumulator will be the first element of the array.
*/

/* 
   Syntax
   array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)
*/

// Example of reduce() function.
// Suppose we want to find the sum of all the elements in the array.
let arr = [1, 2, 3, 4, 5];
let arrSum = arr.reduce((acc, val, index, array) => {
  acc += val;
  return acc;
}, 0);

console.log(arrSum); // 15
