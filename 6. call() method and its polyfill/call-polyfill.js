// Polyfill for call()
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + " is not callable");
  context.myFun = this;
  return context.myFun(...args);
};

// Example of call() method:-
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

const details1 = printDetails.myCall(person1, "Software Engineer", "Bangalore");
const details2 = printDetails.myCall(person2, "Software Tester", "Hyderabad");

console.log(details1); // John is 22 and is a Software Engineer who lives in Bangalore
console.log(details2); // Bob is 26 and is a Software Tester who lives in Hyderabad
