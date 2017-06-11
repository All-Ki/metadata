var express = require("express");
var app = express();
var multer = require('multer')
var upload = multer()


app.post('/get-file-size', upload.single('file'), function(req, res) {
    var ret = {
        size: req.file.size
    };
    res.send(ret);

});






app.get('/', function(req, res) {

    res.sendFile(__dirname + '/index.html');

});


app.listen(process.env.PORT, function() {
    console.log('Example app listening on port' + process.env.PORT);
});
