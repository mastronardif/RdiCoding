var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');
    diController      = require('./server/controllers/di-controller');
rdiController      = require('./server/controllers/rdi-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo');
//mongoose.connect('mongodb://localhost:6921/mean-demo');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index-di.html');
});

/**************/
app.get('/meetups', function (req, res) {
console.log('app.get(/di');
  res.sendfile(__dirname + '/client/views/index.html');
});
/****************/

/**************/
app.get('/rdi', function (req, res) {
console.log('app.get(/rdi');
  res.sendfile(__dirname + '/client/views/index-rdi.html');
});

/*********
app.get('/rdi/fuck', function (req, res) {
console.log('app.get(/rdi/fuck');
  res.send('from api fuck');
  //res.sendfile(__dirname + '/client/views/index-rdi.html');
});
*******/

app.get('/di', function (req, res) {
console.log('app.get(/di');
  res.sendfile(__dirname + '/client/views/index-di.html');
});
/****************/

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/meetups',  meetupsController.list);
app.post('/api/meetups', meetupsController.create);
app.get('/api/dis',      diController.list);
app.post('/api/dis',     diController.create);
app.post('/api/rdi',     rdiController.listwtf);
app.get('/rdi/fuck',     rdiController.listwtf);

app.post('/rdi/codes', rdiController.saveCodes);

//app.get('/api/rdi/fuck',     rdiController.listwtf);


app.listen(3000, function() {
  console.log('I\'m Listening...');
})

/**************
db.getCollection("rdi").find()
db.dis.remove({})
**************/