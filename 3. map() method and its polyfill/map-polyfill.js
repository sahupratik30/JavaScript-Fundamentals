// Polyfill for map()
Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

// Suppose we want each element of an array to be multiplied by 2.
let arr = [1, 2, 3, 4, 5];
let result = arr.myMap((val, index, array) => {
  return val * 2;
});

console.log(result); // [ 2, 4, 6, 8, 10 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// This above code gives the same output as map().
