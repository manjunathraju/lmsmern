const mongoose = require("mongoose");

const UserPopupScehma = new mongoose.Schema({
  // offertitle: {
  //   type: String,
  // },

  // offerdescription: {
  //   type: String,
  // },
  Offerimage:{
    type:String,
  },
  country:{
    type:String,
  },
 
  status: {
    type: String,
  
  },

});

module.exports = new mongoose.model("Popup", UserPopupScehma);