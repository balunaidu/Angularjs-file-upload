var express = require('express')
var bodyParser = require('body-parser')
var multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })
 
var app = express()
 app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
app.use(express.static('public'));
app.post('/photos/upload', upload.single('file'), function (req, res, next) {
 res.send('success')
})
 
// })
app.listen(3000,console.log('servestart'))