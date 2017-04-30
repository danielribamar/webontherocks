var express = require('express')
var app = express()
var open = require('open');
var path = require('path');

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/public/views')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get('/:postid', function(req, res) {
    res.render('post', { title: req.param('postid') })
})

app.listen(5000, function() {
    open('http://localhost:5000');
    console.log('Example app listening on port 5000!')
})