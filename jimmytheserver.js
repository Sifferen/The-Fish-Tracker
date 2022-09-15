const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Table, User } = require("./jimmythemodels")
const path = require("path");
const { genSalt, hash, compare } = require("bcrypt");
const cookieParser = require("cookie-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"))
app.use(cookieParser())
app.set("view engine", "ejs");

const url = "mongodb://localhost:27017/jimmy";
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) throw error;
    console.log("mehhhhhhhhhhhhhhhhhhhhhhhhhhh");
  }
);
app.listen(3000, function () {
  console.log("mehhhhhh");
});
app.get("/", function (req, res) {
  console.log(req.cookies);
  res.sendFile(path.join(__dirname, "public/jimmythelanding.html"));
});

app.get("/jimmytheregistration.html", function (req, res) {
  res.sendFile(path.join(__dirname, "public/jimmytheregistration.html"));
});

app.get("/jimmythelogin.html", function (req, res) {
  res.sendFile(path.join(__dirname, "public/jimmythelogin.html"));
});

app.post("/jimmythelogin.html", (req, res) => {
  const { username, password } = req.body
  User.findOne({ username }, (err, { password: hash, _id }) => {
    compare(password, hash).then((result) => {
      if (result) {
        res.cookie('userId', _id.toString())
        res.redirect(302, "/jimmythe")
      }
    })
  })
})

app.post("/jimmytheregistration.html", function (req, res) {
  const saltRounds = 10;
  const { password } = req.body;
  genSalt(saltRounds, (err, salt) => {
    hash(password, salt, (err, hash) => {
      const newUser = new User({
        ...req.body,
        password: hash
      });
      newUser.save();
      res.cookie('userId', newUser._id.toString())
      res.redirect(302, "/jimmythe")
    })
  })
});

app.post("/jimmythe", (req, res) => {
  const { userId } = req.cookies;
  console.log(userId);
  const table = new Table({
    userId, ...req.body
  })
  table.save()
  res.redirect(302, "/jimmythe")
})

app.get("/jimmythe", (req, res) => {
  res.sendFile(__dirname + "/public/jimmythe.html")
})

app.post("/api/jimmythe", (req, res) => {
  const { userId } = req.cookies;
  Table.findOne({ userId }, (err, table) => {
    res.json(table)
  })
})