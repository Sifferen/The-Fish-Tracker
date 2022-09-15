const tablemodel = require("../jimmythemodels/jimmythetable");
const fetchData = tablemodel.fetchData;
module.exports = {
  fetchData: (req, res) => {
    fetchData((data) => {
      res.render("jimmythe", { table: data });
    });
  },
};
