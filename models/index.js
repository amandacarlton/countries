var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/countries_app");
module.exports.Countries = require("./countries");
