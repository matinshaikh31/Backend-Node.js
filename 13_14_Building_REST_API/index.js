const express = require("express");
const app = express();
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const port = 8000;

//middleWare

app.use(express.urlencoded({ extends: false }));

app.get("/user", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/user", (req, res) => {
  return res.json(users);
});
//if have to mutiple req at same route at that time we use under:- line 49
app
  .route("/api/user/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    //ToDo:Edit new usrer
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    //ToDo:delete new usrer
    return res.json({ status: "Pending" });
  });

app.post("/api/user", (req, res) => {
  //ToDo: Create new usrer
  const body = req.body;
  console.log(body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "succes", id: users.length });
  });
});

app.listen(port, () => {
  console.log("The Server is Started");
});

// app.get("/api/user/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
//   });
// app.patch("/api/user/:id",(req,res)=>{
//     //ToDo:Edit new usrer
//     return res.json({status:"Pending"})
// })
// app.delete("/api/user/:id",(req,res)=>{
//     //ToDo:delete new usrer
//     return res.json({status:"Pending"})
// })
