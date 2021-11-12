const Joi = require('joi');
const mongoose = require('mongoose');

const assistantSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 50
  },
  qualification: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 50
  },
  phone: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 20
  }
});

function validateHealthcareassistant(healthcareassistant) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    qualification: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(20).required()
  };

  return Joi.validate(healthcareassistant, schema);
}

const AssistantModel = mongoose.model("assistant", assistantSchema);
module.exports = AssistantModel;
//exports.validate = validateHealthcareassistant;