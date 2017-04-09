var express = require('express');
var app = express();
var https = require('https');
require('./util');

getAuthUrl = function(credentials, authUrl){

    authUrl = constructUrlEncodedStringFromJson(authUrl, credentials)

    return authUrl

};

getAccessToken = function(oauthEndPoint, options){
    https.get(oauthEndPoint)
};





