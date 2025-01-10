const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("Welcome to the API"); // Sets status to 201 (Created)
});

app.listen(3000, () => {
  console.log("Welcome to the api");
});
