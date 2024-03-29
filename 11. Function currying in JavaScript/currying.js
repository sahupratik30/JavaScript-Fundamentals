const sum = function (...args1) {
  //spread the arguments in values array
  const values = [...args1];

  //return 0 if no arguments are passed
  if (values.length === 0) {
    return 0;
  } else {
    //create an inner function
    const inner = function (...args2) {
      //get the arguments of inner function and merge them in existing values array
      values.push(...args2);

      //if no arguments are passed return the value
      if (args2.length === 0) {
        return values.reduce((a, b) => a + b, 0);
      }
      //else return the same function again
      else {
        return inner;
      }
    };

    //return the inner function
    return inner;
  }
};

console.log(sum(1, 2, 3, 4)());
console.log(sum(1)(2)(3)(4)());
console.log(sum(1, 2)(3, 4)());
console.log(sum(1, 2, 3)(4)());
console.log(sum(1)(2, 3, 4)());
console.log(sum());

// Output should be:-
// 10
// 10
// 10
// 10
// 10
// 0
