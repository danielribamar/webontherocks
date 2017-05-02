var mongoClient = require('mongodb').MongoClient;
var promise = require('promise');
var ObjectId = require('mongodb').ObjectID;

module.exports = {

    getAll: function() {
        return new Promise(function(resolve, reject) {
            mongoClient.connect("mongodb://localhost:27017/webontherocks", function(err, db) {
                // mongoClient.connect("mongodb://localhost:27017/webontherocks", function(err, db) {
                if (!err || err == null) {
                    db.collection('posts', function(err, collection) {
                        collection.find().toArray(function(err, items) {
                            resolve(items);
                        });
                    });
                } else {
                    console.log(err);
                    reject(err);
                }
            });
        });

    },
    getById: function(id) {
        return new Promise(function(resolve, reject) {
            mongoClient.connect("mongodb://localhost:27017/webontherocks", function(err, db) {
                // mongoClient.connect("mongodb://localhost:27017/webontherocks", function(err, db) {
                if (!err || err == null) {
                    var item = db.collection('posts').findOne({ _id: ObjectId(id) })
                    resolve(item);
                } else {
                    console.log(err);
                    reject(err);
                }
            });
        });
    }
};