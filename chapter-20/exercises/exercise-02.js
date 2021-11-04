/*
  Chapter 20 - Node.js
  Exercise 02 - Directory creation
*/

const mime = require("mime");
const { createServer } = require("http");
const { parse } = require("url");
const { resolve, sep } = require("path");
const { createReadStream, createWriteStream } = require("fs");
const { 
  mkdir,
  stat,
  readdir,
  rmdir,
  unlink,
} = require("fs").promises;

const methods = Object.create(null);

createServer((request, response) => {
  let handler = methods[request.method] || notAllowed;

  handler(request)
    .catch(error => {
      if (error.status != null) return error;
      return { body: String(error), status: 500 };
    })
    .then(({ body, status = 200, type = "text/plain" }) => {
       response.writeHead(status, { "Content-Type": type });
       if (body && body.pipe) body.pipe(response);
       else response.end(body);
    });
}).listen(8000);

async function notAllowed(request) {
  return {
    status: 405,
    body: `Method ${request.method} not allowed.`
  };
}

const baseDirectory = process.cwd();

function urlPath(url) {
  let { pathname } = parse(url);
  let path = resolve(decodeURIComponent(pathname).slice(1));
  if (path != baseDirectory && !path.startsWith(baseDirectory + sep)) {
    throw { status: 403, body: "Forbidden" };
  }
  return path;
}

methods.GET = async function(request) {
  let path = urlPath(request.url);
  let stats;

  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    else return {status: 404, body: "File not found"};
  }
  
  if (stats.isDirectory()) {
    return { body: (await readdir(path)).join("\n") };
  } else {
    return { body: createReadStream(path),
            type: mime.getType(path) };
  }
};

methods.DELETE = async function(request) {
  let path = urlPath(request.url);
  let stats;

  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    else return { status: 204 };
  }

  if (stats.isDirectory()) await rmdir(path);
  else await unlink(path);
  return { status: 204 };
};

function pipeStream(from, to) {
  return new Promise((resolve, reject) => {
    from.on("error", reject);
    to.on("error", reject);
    to.on("finish", resolve);
    from.pipe(to);
  });
}

methods.PUT = async function(request) {
  let path = urlPath(request.url);
  await pipeStream(request, createWriteStream(path));
  return { status: 204 };
};

methods.MKCOL = async function(request) {
  let path = urlPath(request.url);
  let stats;

  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    await mkdir(path);
    return {status: 204};
  }

  if (stats.isDirectory()) return { status: 204 };
  else return { status: 400, body: "Not a directory" };
};
