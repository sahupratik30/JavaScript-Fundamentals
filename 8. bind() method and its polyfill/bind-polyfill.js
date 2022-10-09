// Polyfill for bind()
Function.prototype.myBind = function (context = {}, ...args1) {
  if (typeof this !== "function") throw new Error(this + " is not a function");
  context.myFun = this;
  return function (...args2) {
    return context.myFun(...args1, ...args2);
  };
};

// Example of bind() method
let person1 = {
  name: "John",
  age: 21,
};

let person2 = {
  name: "Bob",
  age: 26,
};

function printDetails(designation, city) {
  return `${this.name} is ${this.age} and is a ${designation} who lives in ${city}`;
}

const getDetails1 = printDetails.myBind(
  person1,
  "Software Engineer",
  "Bangalore"
);
const getDetails2 = printDetails.myBind(person2, "Software Tester");

const details1 = getDetails1();
const details2 = getDetails2("Hyderabad");

console.log(details1);
console.log(details2);

// Output:-
// John is 21 and is a Software Engineer who lives in Bangalore
// Bob is 26 and is a Software Tester who lives in Hyderabad
