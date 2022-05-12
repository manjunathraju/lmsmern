const mongoose = require("mongoose");

const BlogScehma = new mongoose.Schema({
  blogtitle: {
    type: String,
  },
  blogurl: {
    type: String,
  },
  blogbannerimage: {
    type: String,
  },

  blogintroduction: {
   type: String,
 },

 introimage: {
   type: String,
 },


 maindescription: {
   type: String,
 },

  maindescimage: {
    type: String,
  },

  conclusion: {
   type: String,
 },

  categoryname : {
    type: String,
 },


 Status : {
    type: String,
 },

 metatitle : {
    type: String,
 },

 metadescription : {
    type: String,
 },

 authorname : {
    type: String,
 },

 authordescription : {
    type: String,
 },

 authorimage : {
    type: String,
 },

 
 disclaimer : {
    type: String,
 }


});

module.exports = new mongoose.model("Blog", BlogScehma);