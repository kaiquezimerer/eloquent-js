/*
  Chapter 20 - Node.js
*/

const { readFile } = require("fs");

readFile("file.txt", "utf-8", (error, buffer) => {
  if (error) throw error;
  console.log("The file contained: ", buffer.length, " bytes.", "The first byte is: ", buffer[0]);
});