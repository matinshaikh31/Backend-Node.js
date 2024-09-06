const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Userroute = require("./routes/user");
const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extends:false}))

mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then((e) => console.log("mongodb connected"));

app.get("/", (req, res) => {
  res.render("homepage");
});
app.use("/user", Userroute);

app.listen(PORT, () => {
  console.log(`Server is started`);
});
