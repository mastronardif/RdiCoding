var mongoose = require('mongoose');

//var schema = new Schema({ name: String, img: String, url: String }, { collection: 'rdi' });
module.exports = mongoose.model('RdiCode', { name: String, img: String, url: String, name22: String }, 'rdicode' );
