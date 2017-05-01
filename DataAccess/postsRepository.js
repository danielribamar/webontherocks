var mongoClient = require('mongodb').MongoClient;
var promise = require('promise');

module.exports = {
    getAll: function() {
        return new Promise(function(resolve, reject) {
            mongoClient.connect("mongodb://localhost:27017/webontherocks", function(err, db) {
                if (!err || err == null) {
                    db.collection('posts', function(err, collection) {
                        collection.find().toArray(function(err, items) {
                            resolve(items);
                        });
                    });
                }
                // reject(err);
            });
        });

    },
    getById: function(id) {
        mongoClient.connect("mongodb://localhost:27017/webontherocks", function(err, db) {
            if (!err) {
                console.log("We are connected");

            }
            console.log("Error connected");
            return;
        });
    }
};