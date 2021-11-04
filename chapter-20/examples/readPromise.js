/*
  Chapter 20 - Node.js
*/

const { readFile } = require("fs").promises;

readFile("file.txt", "utf-8")
  .then((text) => console.log("The file contains:", text));