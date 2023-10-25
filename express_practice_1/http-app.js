const http = require("http");
const { readFileSync } = require("fs");

http
  .createServer((req, res) => {
    //metadata below(it matters if i set it to text/plain then it would have shown raw html code )
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });

      //body
      res.write("<h1>Home Writing</h1>");
      res.end("<h2>ending</h2>"); //end()to end the communication or else itll keep on looping
    } else if (req.url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });

      //body
      res.write("<h1>About</h1>");
      res.end("<h2>ending</h2>"); //end()to end the communication or else itll keep on looping
    } else {
      res.writeHead(404, { "content-type": "text/html" });

      //body
      res.write("<h1>Page not found</h1>");
      res.end("<h2>ending</h2>"); //end()to end the communication or else itll keep on looping
    }
  })
  .listen(5000);
