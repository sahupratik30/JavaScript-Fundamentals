// Polyfill for reduce()
Array.prototype.myReduce = function (cb, accumulator) {
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

// Suppose we want to find the sum of all the elements in the array.
let arr = [1, 2, 3, 4, 5];
let arrSum = arr.myReduce((acc, val, index, array) => {
  acc += val;
  return acc;
});

console.log(arrSum); // 15

// The above code works same as reduce().
