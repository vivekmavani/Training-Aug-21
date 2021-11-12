const Joi = require('joi');
const mongoose = require('mongoose');
//const doctormodel = require('./doctor.model');
//const healthcareassistantmodel = require('./healthcareassistant.model');
const departmentSchema =  new mongoose.Schema({
    _id: Number,
    doctor: [
             {
                type: Number,
                ref: "doctor",
                required: true,
              },
    
    ],
    healthcareassistant: [
            {
                type: Number,
                ref: "assistant",
                required: true,
              },
    ],
    departmentname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

function validateDepartment(department) {
    const schema = {
        departmentname: Joi.String().required()
    };

    return Joi.validate(department, schema);
}

const DepartmentModel = mongoose.model("department", departmentSchema);

module.exports = DepartmentModel;
exports.validate = validateDepartment;