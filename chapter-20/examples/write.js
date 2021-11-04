/*
  Chapter 20 - Node.js
*/

const { writeFile } = require("fs");

writeFile("grafitti.txt", "Node was here!", (error) => {
  if (error) console.log(`Failed to write file: ${error}`);
  else console.log('File written.');
});