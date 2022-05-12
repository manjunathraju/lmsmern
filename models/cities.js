const mongoose = require("mongoose");

const CityScehma = new mongoose.Schema({
  city_name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  country_code: {
    type: String,
    required: true,
  },
  
  number: {
    type: String,
    
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Cities", CityScehma);
