const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const users = require("./MOCK_DATA.json");
const port = 8000;

//connection
mongoose
  .connect("mongodb://localhost:27017/users")
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

//Scheme
const userScheme = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userScheme);

//middleWare
app.use(express.urlencoded({ extends: false }));
app.use((req, res, next) => {
  fs.appendFile("log.txt", `\n ${Date.now()} : ${req.path}\n`, (err, data) => {
    next();
  });
});

app.get("/user", async (req, res) => {
  const DBuser = await User.find({});
  const html = `
    <ul>
    ${DBuser.map((user) => `<li>${user.firstName}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/user", async (req, res) => {
  const DBuser = await User.find({});
  res.setHeader("myName", "Matin");
  return res.json(DBuser);
});
//if have to mutiple req at same route at that time we use under:- line 49
app
  .route("/api/user/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ erro: "User not found" });
    }
    return res.json(user);
  })
  .patch(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
      lastName: "Change",
    });
    return res.json({ status: "Succes" });
  })
  .delete(async (req, res) => {
    const user =  await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Pending" });
  });

app.post("/api/user", async (req, res) => {
  //ToDo: Create new usrer
  const body = req.body;
  if (
    !body.id ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.Job
  ) {
    return res.status(400).json({ msg: "All Field is Reuired" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.Job,
  });
  console.log("Result", result);
  return res.status(201).json({ msg: "Succes" });
});

app.listen(port, () => {
  console.log("The Server is Started");
});
