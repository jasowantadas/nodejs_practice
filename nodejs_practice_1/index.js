// const express = require("express");

// const app = express();

// console.log("dfasdf");
// import http from "http";

// http
//   .createServer((req, res) => {
//     console.log(req.url);
//     res.end();
//   })
//   .listen(5000, () => console.log("Listening"));
import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join(path.resolve(), "public"))); //To access values directly from public folder as static values

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(5000, () => {
  console.log("Server is listening");
});
