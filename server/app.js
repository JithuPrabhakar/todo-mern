const express = require("express");
require("./db/connection");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(1000, () => {
  console.log("server started");
});
