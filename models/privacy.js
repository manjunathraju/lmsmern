const mongoose = require("mongoose");

const TermScehma = new mongoose.Schema({
    termsandcondition: {
    type: String,
  },

  privacypolicy  : {
    type: String,
  },
  
  cokkiepolicy: {
    type: String,
  },
});

module.exports = new mongoose.model("Term", TermScehma);