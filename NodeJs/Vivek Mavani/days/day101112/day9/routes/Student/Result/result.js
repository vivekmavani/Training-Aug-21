
const express = require('express');
var router = express.Router();
router.use(express.json());
let verifyToken = require('../../Authentication/verifytoken');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/days')
  .then(() => console.log('Connected to Mongodb...'))
  .catch(err => console.error('Could not connected to Mongodb...', err));

var Std = require('../studentschema');

//  Create a RESTFUL API which will return a particular student Exam Result. Result Fields are http://localhost:/3000/students/1/result
router.get('/:id/result', verifyToken, async (req, res) => {

  const std = await Std.find({ _id: req.params.id }).select({ Result: 1 });
  if (!std) return res.status(404).send('The student with given id was not found');
  try {
    res.send(std);
  } catch (error) {
    res.status(500).send(error);
  }
});
// Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.

router.put('/:id', verifyToken, async (req, res) => {
 // let newResult = req.body;
 
  try {
    const std = await Std.findById(mongoose.Types.ObjectId(req.params.id));
    if (!std) return res.status(404).send('The employee with given id was not found');
    std.Result.Eng = req.body.Eng;
    const result = await std.save();
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }



});

router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const std = await Std.findByIdAndRemove(req.params.id);
    res.send(std);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;