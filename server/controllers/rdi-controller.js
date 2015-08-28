var Di= require('../models/di');
var Rdi= require('../models/rdi');
var RdiCode= require('../models/rdicode');
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

module.exports.saveCodes = function (req, res) {
    console.log('SERVER rdi-controller.js saveCodes');
    console.log("req = \n" + req);
    
    //var str = JSON.stringify(req, null, 2); 
    //console.log("req str = \n" + req.body);
     //console.log(req.body);
     //console.log(req.body[0].name);
     var row = req.body[0];
     var rows = req.body;
     //console.log(row);     
     
     // save to db
     /*****/
    rows.forEach(function(entry) {
        console.log(entry);
        var rrr = new RdiCode(entry);
        /*****/
        //RdiCode.update({_id: entry._id}, {$set: {name22: entry.name22||''}}, 
        //RdiCode.update({_id: entry._id}, {$set: {entry}}, 
        RdiCode.findOneAndUpdate({_id: entry._id}, entry,
{ upsert: true },
        function (err, result) {
            if (err) return console.error(err);
      
            console.dir(rrr);
        });
        /******/
        /*****
        RdiCode.findByIdAndUpdate(entry._id, { $set: { name: 'FUCK' }}, function (err, tank) {
  if (err) return handleError(err);
  //res.send(tank);
});
******/
        
    });
     
    //var rc= new RdiCode(row);
    //var rc= new RdiCode(rows);
    //rc.save(function (err, result) {
    //  if (err) return console.error(err);
      
    //  console.dir(rc);
      
    //res.json(result);
    //});
    /******/
    
    var results = {};
    
    res.json(results);
//app.post('/rdi/codes', rdiController.saveCodes);
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