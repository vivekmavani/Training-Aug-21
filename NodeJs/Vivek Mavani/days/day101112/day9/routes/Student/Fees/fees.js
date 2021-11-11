
// middalware 
const mongoose = require('mongoose');
const express = require('express');
const app = express();
var router = express.Router();
let verifyToken = require('../../Authentication/verifytoken');
//
app.use(express.json());
var Std = require('../studentschema');
mongoose.connect('mongodb://localhost/days')
  .then(() => console.log('Connected to Mongodb...'))
  .catch(err => console.error('Could not connected to Mongodb...', err));

//  Create a RESTFUL API which return a particular student FEES Record. Fees field are http://localhost:3000/students/1/fees
router.get('/:id/fees', verifyToken, async (req, res) => {

  try {
    const std = await Std.find({ _id: req.params.id }).select({ Fees: 1 });
    if (!std) return res.status(404).send('The student with given id was not found');
    res.send(std);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;