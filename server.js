var express = require('express')
var app = express()
var open = require('open');
var path = require('path');

var posts = [{
        id: 1,
        title: 'NodeJS Server',
        description: 'Basic implementation of nodejs express',
        gistid: '6123d7161631937d169d9d15f6187e78',
        text: '',
        languages: ['nodejs', 'javascript']
    },
    {
        id: 2,
        title: 'AngularJS',
        description: 'Basic Controllers and Directives',
        gistid: 'fa6f08bc71966ad98cf4565b44204d82',
        text: '',
        languages: ['angularjs', 'javascript']
    },
    {
        id: 3,
        title: 'Text',
        description: 'Text Post',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        gistid: null,
        languages: ['dummy']
    },
    {
        id: 4,
        title: 'Umbraco',
        description: 'Custom Create Content View',
        gistid: '85611cc6a60bd02014f9a456b35fcc26',
        text: '',
        languages: ['angularjs', 'html']
    }
];

app.set('view engine', 'jade');
app.set('views', __dirname + '/public/views')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('homepage', { title: 'W3B 0N TH3 R0CK5', year: new Date().getFullYear(), posts: posts })
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
        if (data[i].id == idToLookFor) {
            return (data[i]);
        }
    }
}