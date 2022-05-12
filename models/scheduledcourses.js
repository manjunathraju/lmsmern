const mongoose = require("mongoose");

const ScheduledCoursesSchema = new mongoose.Schema({
  // sid: {
  //   type: Number,
  //   required: true,
  // },
  category_name:{
    type:String,
   
  },
  course_name: {
    type: String,
    
  },
  country: {
    type: String,
    
  },
  city: {
    type: String,
    
  },
  base_price: {
    type: String,
    
  },
  special_price: {
    type: String,
    
  },
  tax:{
    type:Number,
    
  },
  course_stage: {
    type: String,
    default:"Scheduled",
    
  },
  course_type: {
    type: String,
    
  },
  class_type: {
    type: String,
    
  },
  date:{
    type:String,
   
  },
  start_time:{
    type:String,
   
  },
  end_time:{
    type:String,
    
  },

  
  status: {
    type: String,
    
  },

  
  
  
  
  
});

module.exports = new mongoose.model("ScheduledCourses", ScheduledCoursesSchema);
