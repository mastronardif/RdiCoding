var mongoose = require('mongoose');

//var schema = new Schema({ name: String, img: String, url: String }, { collection: 'rdi' });


module.exports = mongoose.model('Rdi', {
  name: String, img: String, url: String
}, 'rdi');