const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `Please Stakeholder's name!`]
  },
  address: {
    type: String,
    required: [true, 'Please provide address']
  },
  state:{
    type:String,
    required:[true,'Please provide state']
  },
  district:{
    type:String,
    required:[true,'Please provide district']
  },
  mobile:{
    unique:true,
    type:Number,
    maxlength:10,
    minlength:10,
    required:[true,'Please provide mobile number']
  },
  good:{
    type:Number
  },
  bad:{
    type:Number
  },
  normal:{
    type:Number
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
});


const feedback = mongoose.model('feedback', feedbackSchema);

module.exports = feedback;