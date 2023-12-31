const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

//middle ware
app.use(express.static("./"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
