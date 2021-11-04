/*
  Chapter 20 - Node.js
*/

const { readFileSync } = require("fs");

console.log("The file contains: ", readFileSync("file.txt", "utf-8"));