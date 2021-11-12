const Joi = require('joi');
const mongoose = require('mongoose');
require('./doctor.model');
 require('./healthcareassistant.model');
const patientSchema = new mongoose.Schema({
    _id: Number,
    treated: [
        {
            _id: {
                type: Number,
                required: true,
                ref : 'doctor'
                // ref: function () {
                //     if (this.category == "doctor") {
                //         return "doctor";
                //     } else {
                //         return "assistant";
                //     }
                // }
            },
            category: {
                type: String,
                required: true,
                enum: ['doctor', 'assistant'],
                lowercase: true,
                trim: true,
            },
        },
    ],
    medicine: [{
        _id: {
            type: Number,
            required: true,
            ref: "medicine",
        },
        desc: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            enum: ['morning', 'afternoon', 'night'],
            lowercase: true,
            trim: true,
        },

    }],
    departmentid: {
        type: Number,
        required: true,
        trim: true,
        ref: "department",
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 20
    }
});

function validatePatient(patient) {
    const schema = {
        patientname: Joi.String().required()
    };

    return Joi.validate(patient, schema);
}

exports.validate = validatePatient;
const PatientModel = mongoose.model("patient", patientSchema);
module.exports = PatientModel;
