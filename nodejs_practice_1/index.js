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
//middle ware (some important ....remember)
app.use(express.static(path.join(path.resolve(), "public"))); //To access values directly from public folder as static values
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("index.html"); //Because of express.static we now dont have to set any abolute path to the function
});
app.get("/form", (req, res) => {
  const ggwp = 10,
    g = 1;
  res.render("index.ejs", { ggwp, g });
});

app.post("/success", (req, res) => {
  res.end(req.body);
});
app.post("/form", (req, res) => {
  res.redirect("/success");
});

app.listen(5000, () => {
  console.log("Server is listening");
});
