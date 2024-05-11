const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Company XYZ application");
});

app.get("/feature-1", (req, res) => {
  res.send("Feature 1!");
});

app.get("/feature-2", (req, res) => {
  res.send("Feature 2!");
});

app.get("/feature-3", (req, res) => {
  res.send("Feature 3!");
});

app.get("/feature-4", (req, res) => {
  res.send("Feature 4!");
});

//app.get("/feature-5", (req, res) => {
 // res.send("Feature 5!");
//});

module.exports = app;
