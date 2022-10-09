/*
    1. bind() is a method in JavaScript which is available to all functions in JavaScript.
    2. It is used to change the context of the "this" keyword inside the function upon which it is called (Explicit binding), irrespective of how the function is being called.
    3. It returns a new copy of the function upon which it is called.
    4. It receives the "this" value as the first parameter and the rest of the parameters are a list of comma-separated values which are to be passed to the function as arguments upon which the bind method is called.

*/

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

const getDetails1 = printDetails.bind(
  person1,
  "Software Engineer",
  "Bangalore"
);
const getDetails2 = printDetails.bind(person2, "Software Tester");

const details1 = getDetails1();
const details2 = getDetails2("Hyderabad");

console.log(details1);
console.log(details2);

// Output:-
// John is 21 and is a Software Engineer who lives in Bangalore
// Bob is 26 and is a Software Tester who lives in Hyderabad
