var express = require('express')
var app = express()
var open = require('open');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get('/:postid', function(req, res) {
    console.log(req.param('postid'));
    res.sendFile(path.join(__dirname + '/public/views/post.html'));
})

app.listen(5000, function() {
    open('http://localhost:5000');
    console.log('Example app listening on port 5000!')
})