/*
Memoization: Memoization is a technique for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.

Let us try to understand this by breaking the definition into small parts.


Expensive Function Calls: Time and memory are the two most important resources in computer applications. As a result, an expensive function call is one that consumes large amounts of these two resources due to extensive calculation during execution.

Cache: A cache is just a temporary data store that stores data in order to serve future requests for that data more quickly.
*/

function findSum(a, b) {
  return a + b;
}

function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      console.log(`Value of ${key} from cache`);
      return cache[key];
    } else {
      console.log(`Computing Value for ${key}`);
      let result = fn.apply(null, args);
      cache[key] = result;
      return result;
    }
  };
}

const memoizedSum = memoize(findSum);

console.log(memoizedSum(2, 3));
console.log(memoizedSum(4, 5));
console.log(memoizedSum(2, 3));

// Output:-
// Computing Value for [2,3]
// 5
// Computing Value for [4,5]
// 9
// Value of [2,3] from cache
// 5
