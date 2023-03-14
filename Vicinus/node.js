const path = require("path");
const express = require("express");
app = express();
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.listen(8080);
console.log("Server is running on port 8080");
