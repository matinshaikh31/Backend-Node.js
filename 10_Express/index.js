//using exprees
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("Hello HomePage" + "Hey " +  req.query.name + req.query.age);
});
app.get("/about", (req, res) => {
  res.end("Hello about");
});

app.listen(3000,()=>{
    console.log("The Server is started")
})




















// //usinh http in build mwthod of node
// const http = require("http");

// const server = http.createServer((req, res) => {

//   switch (req.url) {
//     case "/":
//       res.end("hi");
//       break;
//     case "/about":
//       res.end("about");
//       break;

//     default:
//       break;
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is Started");
// });
