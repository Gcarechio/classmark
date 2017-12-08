var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var path =  require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

consign({ cwd: 'server'})
    .include('models')
    .then('api')
    .then('routes')
    .into(app);

module.exports = app;