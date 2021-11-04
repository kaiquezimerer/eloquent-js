/*
  Chapter 20 - Node.js
*/

const { request } = require("http");

const requestStream = request({
  hostname: "eloquentjavascript.net",
  path: "/20_node.html",
  method: "GET",
  headers: { Accept: "text/html" }
}, (response) => {
  console.log("Server responded with status code", response.statusCode);
});

requestStream.end();
