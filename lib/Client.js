var credentials = require('./credentials');
var https = require('https');
require('./core');

var Client = function(){
    this.credentials = credentials.create({});
    this.authEndPoint = '';
    this.authUrl = '';
    this.accessToken = '';
    this.oauthEndPoint = '';
};


Client.prototype.createCredentials = function(options){
    this.credentials = credentials.create(options);
};

Client.prototype.getCredentials = function(){
    return this.credentials;
};

Client.prototype.setAuthEndPoint = function(url){
    this.authEndPoint = url;
};

Client.prototype.setOauthEndPoint = function(url){
    this.oauthEndPoint = url;
};

Client.prototype.getAuthUrl = function(){
    this.authUrl = getAuthUrl(this.credentials, this.authEndPoint);
    return this.authUrl;
};

Client.prototype.getAccessToken = function(code, state){

    var state = state || '';
    var options = {
        'client_id' : this.credentials.client_id,
        'client_secret': this.credentials.client_secret,
        'code': code,
        'redirect_uri': this.credentials.redirect_url,
        'state': state

    };
    var url = constructUrlEncodedStringFromJson(this.oauthEndPoint, options);
    return new Promise(function(resolve, reject){
        https.get('w3', (res) => {
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

module.exports = Client;
