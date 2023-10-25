const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
