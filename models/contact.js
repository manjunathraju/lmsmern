const mongoose = require("mongoose");

const contactScehma = new mongoose.Schema({
  countryname: {
    type: String,
  },

  contactnumber: {
    type: Number,
  },

  countryimage: {
    type: String,
  },
  
  contactstatus: {
    type: String,
  
  },
});

module.exports = new mongoose.model("Contact", contactScehma);