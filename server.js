const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Server is LIVE!");
});
app.listen(3000, () => console.log("Running…"));
