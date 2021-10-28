/* GET home page */
const index = function (req, res) {
  res.render("index", { title: "Hotel Finder" });
};
module.exports = {
  index,
};
