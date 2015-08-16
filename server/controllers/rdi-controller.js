var Di= require('../models/di');
var Rdi= require('../models/rdi');
var mongoose = require('mongoose');

module.exports.create = function (req, res) {
console.log('server inside create rdi-controller.js');
/*******/
  var di= new Di(req.body);
  di.save(function (err, result) {
    res.json(result);
  });
/******/



}

module.exports.listwtf = function (req, res) {

console.log('inside rdi-controller.js listwtf');
//   log22('fffff');

console.log("req = \n" + req);

Rdi.find(function (err, results) {
  if (err) return console.error(err);
//  console.log(results);
  
console.log(results.length + " results[0] = "+ results[0].name);
    res.json(results);
 //res.json(results[0]);
 //res.json({bob: results});

})


//res.json({name: "wtf22"});
//return  {name: "wtf"}
  //Di.find({}, function (err, results) {
   // res.json(results);
 // });
}

function log22 (msg) {


//mongoose.connect('mongodb://localhost:27017/mean-demo');

   console.log('server 02 inside rdi-controller.js log22');
    
var kittySchema = mongoose.Schema({
    name: String
});



//var Kitten = mongoose.model('Rdi', {name: String, img: String, url: String});
//var Kitten = mongoose.model('rdi', kittySchema);

//Di.find(function (err, kittens) {
Rdi.find(function (err, data) {
  if (err) return console.error(err);
//  console.log(data);
console.log(data[0].name);

})

}