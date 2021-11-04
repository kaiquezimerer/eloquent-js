/*
  Chapter 20 - Node.js
*/

const { createServer } = require("http");

const server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>
  `);
  response.end();
});

server.listen(8000);
console.log("Listening: http://localhost:8000/");
