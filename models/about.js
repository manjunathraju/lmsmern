const mongoose = require("mongoose");

const AboutScehma = new mongoose.Schema({
  CareerInformation: {

    aboutustitle: {
    type: String,
    },
    
    aboutus: {
    type: String,
  },

  missionvision  : {
    type: String,
  },
  
  whoweare: {
    type: String,
  },

  metatitle: {
    type: String,
  },

  metadescription: {
    type: String,
  },
},

ourclientsanddelegates: {
  description: {
    type: String,
  },

  Image: {
    type: String,
  },
},

ourtrainer: {
  description: {
    type: String,
  },

  Image: {
    type: String,
  },
},

ourlocations: {
  description: {
    type: String,
  },

  Image: {
    type: String,
  },
},

inhouseandbespoketraining: {
  description: {
    type: String,
  },

  Image: {
    type: String,
  },
},


consultancyandcustomizedtraining: {
  description: {
    type: String,
  },

  Image: {
    type: String,
  },
},

});

module.exports = new mongoose.model("Abouts", AboutScehma);