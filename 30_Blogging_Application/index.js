const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Userroute = require("./routes/user");
const cookieParser = require("cookie-parser");
const { checkForAuthentictionCokkie } = require("./middleware/authentication");
const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extends:false}))
app.use(cookieParser())
app.use(checkForAuthentictionCokkie("token"))

mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then((e) => console.log("mongodb connected"));

app.get("/", (req, res) => {
  res.render("homepage",{
    user:req.user
  })

 
});
app.use("/user", Userroute);

app.listen(PORT, () => {
  console.log(`Server is started`);
});
