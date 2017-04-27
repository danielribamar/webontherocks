var express = require('express')
var app = express()
var open = require('open');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get('/blog', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/blog.html'));
})

app.listen(3000, function() {

    open('http://localhost:3000');
    console.log('Example app listening on port 3000!')
})