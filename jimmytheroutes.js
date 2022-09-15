import { Router } from "express";
import { genSalt, hash, compare } from "bcrypt";
import { Table, User } from "./jimmythemodels/index.js";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = Router();

router.get("/", function (req, res) {
  console.log(req.cookies);
  res.sendFile(join(__dirname, './public/jimmythelanding.html'));
});

router.get("/jimmytheregistration.html", function (req, res) {
  res.sendFile(join(__dirname, "public/jimmytheregistration.html"));
});

router.get("/jimmythelogin.html", function (req, res) {
  res.sendFile(join(__dirname, "public/jimmythelogin.html"));
});

router.get("/jimmythe", (req, res) => {
  res.sendFile(join(__dirname, './public/jimmythe.html'))
})

router.post("/jimmythelogin.html", (req, res) => {
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

router.post("/jimmytheregistration.html", function (req, res) {
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

router.post("/jimmythe", (req, res) => {
  const { userId } = req.cookies;
  console.log(userId);
  const table = new Table({
    userId, ...req.body
  })
  table.save()
  res.redirect(302, "/jimmythe")
})


router.post("/api/jimmythe", (req, res) => {
  const { userId } = req.cookies;
  Table.findOne({ userId }, (err, table) => {
    res.json(table)
  })
})

export default router;