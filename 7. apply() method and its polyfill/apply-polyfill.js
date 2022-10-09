// Polyfill for apply()
Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") throw new Error(this + " is not callable");
  context.myFun = this;
  return context.myFun(...args);
};

// Example of apply() method:-
let person1 = {
  name: "John",
  age: 22,
};

let person2 = {
  name: "Bob",
  age: 26,
};

function printDetails(designation, city) {
  return `${this.name} is ${this.age} and is a ${designation} who lives in ${city}`;
}

const details1 = printDetails.myApply(person1, [
  "Software Engineer",
  "Bangalore",
]);
const details2 = printDetails.myApply(person2, [
  "Software Tester",
  "Hyderabad",
]);

console.log(details1); // John is 22 and is a Software Engineer who lives in Bangalore
console.log(details2); // Bob is 26 and is a Software Tester who lives in Hyderabad
