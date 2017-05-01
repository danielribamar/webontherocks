var express = require('express')
var app = express()
var open = require('open');
var path = require('path');
var postsRepository = require('./DataAccess/postsRepository.js');
var promise = require('promise');

app.set('view engine', 'jade');
app.set('views', __dirname + '/public/views')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {

    postsRepository.getAll()
        .then(result => {
            console.log('will render now');
            res.render('homepage', {
                title: 'W3B 0N TH3 R0CK5',
                year: new Date().getFullYear(),
                posts: result
            })
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/posts/:postid', function(req, res) {
    var postid = req.params.postid;
    var post = findId(posts, postid)
    res.render('post', { title: post.title, post: post, posts: posts })
})

app.listen(5000, function() {
    open('http://localhost:5000');
    console.log('listening on port 5000!')
})

function findId(data, idToLookFor) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].ObjectId == idToLookFor) {
            return (data[i]);
        }
    }
}