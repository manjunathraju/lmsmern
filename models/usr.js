const mongoose = require("mongoose");

const UserScehma = new mongoose.Schema({
  uploadexcel: {
    type: String,
  },

});

module.exports = new mongoose.model("Userupload", UserScehma);