const usermodels = require("../jimmythemodels/jimmytheusers")
const fetchuser = usermodels.fetchData
module.exports = {
    fetchData : (req, res) => {
        fetchUser( (data) => {
            res.render('dashboard', { users: data } )
        })
    }
}
