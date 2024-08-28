const express = require("express");
const app = express();
const PORT = 8001;

const urlRoute = require("./routes/url");
const connectToMongoDb = require("./connection");

connectToMongoDb("mongodb://localhost:27017/users")
  .then(() => console.log("Connected"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json())
app.use("/url", urlRoute);

app.listen(8001, () => console.log(`Server is Started at ${PORT}`));
