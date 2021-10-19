/*
  Chapter 05 - High-order Functions
  Exercise 01 - Flattening
*/

const array = [[1, 2, 3], [4, 5], [6]];
console.log(array.reduce((flat, current) => flat.concat(current), [])); // → [1, 2, 3, 4, 5, 6]
