const express = require("express")
const router = express.Router()
const usercontroler = require("../jimmy_the_controlers/jimmytheprrep")
router.get("/jimmythe",usrecontroler.fetchData)
module.exports = router
