const express = require('express')
const app = express();
const http = require('http').Server(app)
const path = require('path')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {poolsize:10}, function(err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");

  require('./create.js')(app, dbo);
  require('./add.js')(app, dbo);

});
