const mongoose = require("mongoose");

const FaqScehma = new mongoose.Schema({
  Question: {
    type: String,
  },

  Answer: {
    type: String,
  },
  
  Status: {
    type: String,
  
  },

});

module.exports = new mongoose.model("faqs", FaqScehma);