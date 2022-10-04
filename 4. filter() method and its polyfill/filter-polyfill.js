// Polyfill for filter()
Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

// Suppose we want to return the elements of an array which are greater than 3.
let arr = [2, 4, 6, 8, 10];
let result = arr.myFilter((val, index, array) => {
  return val > 3;
});

console.log(result); // [4, 6, 8, 10]
console.log(arr); // [2, 4, 6, 8, 10]

// This above code gives the same output as filter().
