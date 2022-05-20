const express = require("express")
const router = express.Router()
const usercontroler = require("../jimmy_the_controlers/jimmytheprrep")
router.get("/jimmythe",usercontroler.fetchData)
module.exports = router
