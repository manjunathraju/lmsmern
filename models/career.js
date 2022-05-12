const mongoose = require("mongoose");

const CareerScehma = new mongoose.Schema({
  careerInfo: {

    careerstitle: {
    type: String,
    },
    
    whatwedo: {
    type: String,
  },

  whatwewant  : {
    type: String,
  },
  
  careersdescription: {
    type: String,
  },

  whatwedoimage: {
    type: String,
  },

  whatwewantimage: {
    type: String,
  },

  applynowimage: {
    type: String,
  },
},

ourvalues: {
  opportunity: {
    type: String,
  },

  transparency: {
    type: String,
  },

  diversity: {
    type: String,
  },

  decency: {
    type: String,
  },
},

jobopenings: {
  job1: {
    type: String,
  },

  job2: {
    type: String,
  },

  job3: {
    type: String,
  },

  job4: {
    type: String,
  },

  job5: {
    type: String,
  },

  job6: {
    type: String,
  },
},

});

module.exports = new mongoose.model("Career", CareerScehma);