var express = require('express');
var app = express();
var https = require('https');
require('./util');

getAuthUrl = function(credentials, authUrl){

    authUrl = constructUrlEncodedStringFromJson(authUrl, credentials)

    return authUrl

};

getAccessToken = function(url){
    return new Promise(function(resolve, reject){
        https.get(url, (res) => {
            res.setEncoding('utf8');
            res.on('data', function (body) {
                resolve(body);
            }).on('error', function(e) {
                console.log("Got error: " + e.message);
                reject(e);
            });
        });

    });
};





