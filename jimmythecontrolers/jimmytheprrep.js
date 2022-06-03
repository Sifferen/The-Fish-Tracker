const tablemodel = require("../jimmythemodels/jimmythetable")
const fetchData = usermodels.fetchData
module.exports = {
    fetchData : (req, res) => {
        fetchData( (data) => {
            res.render('jimmythe', { table: data } )
        })
    }
}
