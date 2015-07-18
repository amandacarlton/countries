var mongoose = require("mongoose");

var countriesSchema = new mongoose.Schema({
                   name: String,
                   flag: String,
                   capital: String,
                   population: Number

                  });


var Countries = mongoose.model("Countries", countriesSchema);



module.exports = Countries;
