const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req.url);
  if (req.url == "/") res.end("Welcome to our home page");
  if (req.url == "/about") {
    res.end("About Page");
  }
  res.end(`<h1>We cant seem to find the page you are looking for</h1>`);
});
server.listen(4000);
