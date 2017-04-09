var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var client = require('./lib/Client');
var app = require('express')();
require('./lib/core');
var http = require('http');

module.exports = {
  client: client,
};

client = new client();
var redirectUrl = 'http://f2be25ef.ngrok.io';

client.createCredentials({
  clientId : '162571341137.163881973139',
  scope : 'channels:read',
  'clientSecret': '1bc8cb1a4e455839f88b659646d78b1b',
  redirectUrl : 'http://f2be25ef.ngrok.io',
  state : '',
  team : ''

});

client.setAuthEndPoint("https://slack.com/oauth/authorize");
client.setOauthEndPoint("https://slack.com/api/oauth.access");

app.get('/slack-oauth', function(req, res) {
  console.log(client.getAuthUrl());
  res.redirect(client.getAuthUrl());
});


app.get(redirectUrl, function(req, res) {
  console.log(req.get('code'));
});

app.get('/', function(req, res){

  var code = req.param('code');
  var resp = client.getAccessToken(code);
  resp.then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err.message);
  });
  res.redirect('http://www.google.com');

});

module.exports = app;
