function times(req, res, next) {
 var date= new Date().toISOString();
  console.log('Time:', date)
    next();
  }
  module.exports = times;