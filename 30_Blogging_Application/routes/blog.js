const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const Blog = require("../models/blog");
const route = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

route.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});
route.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  console.log(blog)
  return res.render("blog", {
    user: req.user,
    blog,
  });
});
route.post("/", upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blog.create({
    body,
    title,
    createdBy: req.user_id,
    coverImage: `/uploads/${req.file.filename}`,
  });
  return res.redirect(`/blog/${blog._id}`);
});

module.exports = route;
