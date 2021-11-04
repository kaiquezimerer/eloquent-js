/*
  Chapter 20 - Node.js
*/

const { readFile } = require("fs");

readFile("file.txt", "utf-8", (error, text) => {
  if (error) throw error;
  console.log("The file contains: ", text);
});