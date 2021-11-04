/*
  Chapter 20 - Node.js
*/

const { request } = require("http");

request({
  hostname: "localhost",
  port: 8000,
  method: "POST",
}, (response) => {
  response.on("data", (chunk) => process.stdout.write(chunk.toString()));
}).end("Hello server"); // → Hello server
