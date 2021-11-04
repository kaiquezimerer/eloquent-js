/*
  Chapter 20 - Node.js
*/

const { reverse } = require("./reverse");

const argument = process.argv[2];
console.log(reverse(argument));
