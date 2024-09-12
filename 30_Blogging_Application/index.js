const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Userroute = require("./routes/user");
const Blogroute = require("./routes/blog");
const cookieParser = require("cookie-parser");
const { checkForAuthentictionCokkie } = require("./middleware/authentication");
const PORT = 8001;
const Blog = require("./models/blog");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extends: false }));
app.use(cookieParser());
app.use(checkForAuthentictionCokkie("token"));
app.use(express.static(path.resolve("./public")))

mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then((e) => console.log("mongodb connected"));

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({})
  res.render("homepage", {
    user: req.user,
    blogs: allBlogs,
  });
});
app.use("/user", Userroute);
app.use("/blog", Blogroute);

app.listen(PORT, () => {
  console.log(`Server is started`);
});
