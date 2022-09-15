const express = require("express");
const router = express.Router();
const tablecontroler = require("../jimmythecontrolers/jimmytheprrep");
const User = require("../jimmythemodels/jimmytheusers").User;
router.get("/jimmythe", tablecontroler.fetchData);

router.post("/jimmythe", (req, res) => {
  // information in req.body
  const { username, password } = req.body;
  User.findOne({ username: username }, (error, user) => {
    if (error) throw error;
    if (user) {
      console.log(user.password);
      console.log(user);
      if (password == user.password) {
        res.redirect("/jimmythe");
      } else res.redirect("jimmythelogin.html");
    }
  });

  res.redirect("/jimmythelogin.html");
});
module.exports = router;
