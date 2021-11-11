var mongoose = require('mongoose');
var stdschemadata = require('./std');
const stdSchema = new mongoose.Schema(stdschemadata);
module.exports = mongoose.model('students', stdSchema);  