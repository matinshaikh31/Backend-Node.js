const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const log = `${Date.now()}${req.url},"New Req recive\n"`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home");
        break;
      case "/about":
        res.end("about");
      default:
        res.end("404 not found");
        break;
    }
  });
});

server.listen(3001, () => console.log("Server is started"));
