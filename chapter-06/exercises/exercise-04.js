/*
  Chapter 06 - The Secret Life of Objects
  Exercise 04 - Borrowing a method
*/

let map = {
  one: true, 
  two: true,
  hasOwnProperty: true,
};

console.log(Object.prototype.hasOwnProperty.call(map, "one")); // → true
