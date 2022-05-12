const mongoose = require("mongoose");

const GeneralScehma = new mongoose.Schema({

  //   companybrochure: {
  //   type: String,
  //   },
    
  //   ouraccreditations: {
  //   type: String,
  // },

  // globalmedia  : {
  //   type: String,
  // },
  
  // ourpartners: {
  //   type: String,
  // },

  // generalreviews: {
  //   type: String,
  // },

  // ourcorporateclients: {
  //   type: String,
  // },

  Offerimage: {
    type: String,
  },

  WhyChooseQuestion1: {
    type: String,
  },

  WhyChooseAnswer1: {
    type: String,
  },
  WhyChooseQuestion2: {
    type: String,
  },

  WhyChooseAnswer2: {
    type: String,
  },
  WhyChooseQuestion3: {
    type: String,
  },

  WhyChooseAnswer3: {
    type: String,
  },
  WhyChooseQuestion4: {
    type: String,
  },

  WhyChooseAnswer4: {
    type: String,
  },

  generalvideourl:{
    type: String
  }

});

module.exports = new mongoose.model("General", GeneralScehma);