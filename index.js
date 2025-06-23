const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express with .env!");
});
app.listen(PORT, () => {
  console.log("app-started succusssfully");
});

module.exports;
