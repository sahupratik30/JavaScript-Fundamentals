// Flattening an array means to convert a nested array into a single array.

let array = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]];

// We need to create a custom flatten() method which will receive an array as a parameter and returns a flattened array i.e, [0, 1, 2, 3, 4, 5] in the above case.

// Implementation:-
function flatten(arr) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(flatten(array)); // [0, 1, 2, 3, 4, 5]
