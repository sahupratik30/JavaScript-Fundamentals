/* 
   1. call() is method in JavaScript which is available to all functions in JavaScript.
   2. It is used to change the context of the "this" keyword inside the function upon which it is called(explicit binding), irrespective of how the function is being called.
   3. With the help of call() method we can borrow functionality from one object into another object.
   4. It receives the context of the "this" keyword as the first parameter and the rest of the parameters are a list of comma-separated values which are to be passed to the function as arguments upon which the call() method is being called.
*/

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

const details1 = printDetails.call(person1, "Software Engineer", "Bangalore");
const details2 = printDetails.call(person2, "Software Tester", "Hyderabad");

console.log(details1); // John is 22 and is a Software Engineer who lives in Bangalore
console.log(details2); // Bob is 26 and is a Software Tester who lives in Hyderabad
