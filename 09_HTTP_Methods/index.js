//Http methods
// (1) GET:-It is use when want to get a data from a server
//           By default browser send a get request to a server
// (2) POST:-When we want to send data to a server or muted a data to server we use post method
// (3) PUT:-When we want to Uplod a file or image to a server at daa time we use put
// (4) PATCH:-When we want to update some data in DB for ex change name or passsword
// (5) DELET:-It is use when we want to delet something E.g delet a account

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  const log = `${Date.now()} : ${req.url} : New Request Recieved \n`;
  const myUrl = url.parse(req.url, true);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method == "GET") res.end("Home Page");
        break;

      case "/about":
        //query parameter
        const username = myUrl.query.myname;
        console.log(username);
        res.end(`Hii,  ${username}`);
        break;

      case "/search":
        const search = myUrl.query.search_query;
        console.log(search);
        res.end("Here are your result for " + search);
        break;

      case "/signup":
        if (req.method == "GET") 
          res.end("This is sigiup form");
         else if (req.method == "POST") {
          //DB Query
          res.end("Succesd")
        }
        break;

      default:
        res.end("404 Not Found");
    }
  });

  // console.log(req.headers)
  // console.log(req)
});

const PORT = 8000;
myServer.listen(8000, () => {
  console.log(`Server started at port no ${PORT} `);
});


