const express = require("express")
const router = express.Router()
const tablecontroler = require("../jimmythecontrolers/jimmytheprrep")
router.get("/jimmythe",tablecontroler.fetchData)

router.post('/jimmythe', (req, res) => {
    
})
module.exports = router
