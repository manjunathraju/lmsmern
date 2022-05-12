const mongoose = require("mongoose");

const addressScehma = new mongoose.Schema({
  address: {
    type: String,
  },

  addresscontactnumber: {
    type: Number,
  },
  
  addressstatus: {
    type: String,
  
  },

});

module.exports = new mongoose.model("Address", addressScehma);