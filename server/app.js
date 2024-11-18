const express = require("express");
require("./db/connection");
const auth = require("./routes/auth");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", auth);

app.listen(1000, () => {
  console.log("server started");
});
