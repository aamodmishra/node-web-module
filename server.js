const http = require("http");
const fs = require("fs");
const { URL } = require("url");

// creating server
http.createServer((req, res) => {
  const baseUrl = `http://${req.headers.host}`;
  const myUrl = new URL(req.url, baseUrl);
  const pathname = myUrl.pathname;

  console.log("Request for " + pathname + " received");

  fs.readFile(pathname.substr(1), (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 Not Found</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data.toString());
    }
    res.end();
  });
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");//if you visit http://127.0.0.1:8081/index.html you see html file 
