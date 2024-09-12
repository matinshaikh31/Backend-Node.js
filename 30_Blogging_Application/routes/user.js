const { Router } = require("express");
const User = require("../models/user");

const route = Router();

route.get("/signin", (req, res) => {
  return res.render("signin");
});
route.get("/signup", (req, res) => {
  return res.render("signup");
});
route.get("/logout",(req,res)=>{
  res.clearCookie("token").redirect("/")
})
route.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenrateToken(email, password);
    console.log("user", token);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    res.render("signin",{
      error:"Enter a Correct Password"
    })
  }
});
route.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect("/");
});

module.exports = route;
