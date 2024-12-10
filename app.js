// const http = require("http");
// const fs = require("fs");
const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

app.use(express.static("resources"));

app.get("/", (req, res) => {
  res.sendFile("./resources/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./resources/about.html", { root: __dirname });

  res.render("email");
});

app.get("/contact", (req, res) => {
  res.sendFile("./resources/contact-me.html", { root: __dirname });
});

app.get("*", (req, res) => {
  res.status(404).sendFile("./resources/404.html", { root: __dirname });
});
