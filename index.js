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
    clientSecret: '1bc8cb1a4e455839f88b659646d78b1b',
    scope : 'channels:read',
    redirectUrl : 'something',
    state : 'something',
    team : 'something'

});

client.setAuthEndPoint("https://slack.com/oauth/authorize")
client.setOauthEndPoint("https://slack.com/api/oauth.access");


console.log(client.getAuthUrl());

app.get('/slack-oauth', function(req, res) {
    console.log("inside");
    res.redirect(client.getAuthUrl);
});

app.get(redirectUrl, function(req, res) {
    console.log(req.get('code'));

    var accessToken = client.getAccessToken(res.get('code'), res.get('state'));
    console.log(accessToken);
});

module.exports = app;





