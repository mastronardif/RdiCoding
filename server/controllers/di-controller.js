var Di= require('../models/di');

module.exports.create = function (req, res) {
console.log('Server DI 01XXXXXXXXXXXXXXXXX inside create di-controller.js');
  var di= new Di(req.body);
  di.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
console.log('023 inside di-controller.js');
  Di.find({}, function (err, results) {
    res.json(results);
  });
}