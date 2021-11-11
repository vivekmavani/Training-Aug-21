var express = require('express');
var router = express.Router();
global.config = require('./config');

router.use(express.json()); //req.body
let jwt = require('jsonwebtoken');

/* Post users Login. */
router.post('/login', function (req, res, next) {
  let userdata = {
      username: req.body.username,
      password: req.body.password
  };

  let token = jwt.sign(userdata, global.config.secretKey, {
      algorithm: global.config.algorithm,
      expiresIn: '5d'
      });
  //Go to server for user varificarion
  if (userdata.username == "admin" && userdata.password == "admin") {
      res.status(200).json({
          message: 'Login Successful',
          jwtoken: token
          });
        
  }
  else {
      res.status(401).json({
          message: 'Login Failed'
      });
  }
});


module.exports = router;
