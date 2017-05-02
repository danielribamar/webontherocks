var express = require('express')
var app = express()
var open = require('open');
var path = require('path');
var postsRepository = require('./DataAccess/postsRepository.js');
var promise = require('promise');

var posts = "";

app.set('view engine', 'jade');
app.set('views', __dirname + '/public/views')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {

    postsRepository.getAll()
        .then(result => {
            posts = result;
            res.render('homepage', {
                title: 'W3B 0N TH3 R0CK5',
                year: new Date().getFullYear(),
                posts: posts
            })
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/posts/:postid', function(req, res) {

    var postid = req.params.postid;

    postsRepository.getById(postid)
        .then(result => {
            res.render('post', {
                title: 'W3B 0N TH3 R0CK5',
                year: new Date().getFullYear(),
                post: result,
                posts: posts
            })
        })
        .catch(err => {
            console.log(err);
        });
})

app.listen(5000, function() {
    open('http://localhost:5000');
    console.log('listening on port 5000!')
})