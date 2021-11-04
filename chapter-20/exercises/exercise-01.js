/*
  Chapter 20 - Node.js
  Exercise 01 - Search tool
*/

const { 
  statSync,
  readdirSync,
  readFileSync,
} = require("fs");

const searchTerm = new RegExp(process.argv[2]);

for (let arg of process.argv.slice(3)) {
  search(arg);
}

function search(file) {
  let stats = statSync(file);
  if (stats.isDirectory()) {
    for (let f of readdirSync(file)) {
      search(file + "/" + f);
    }
  } else if (searchTerm.test(readFileSync(file, "utf8"))) {
    console.log(file);
  }
}
