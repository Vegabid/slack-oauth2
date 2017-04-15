var credentials = require('./credentials');
require('./core');
var errors = require('./Error');

var Client = function(){
    this.credentials = credentials.create();
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
    if(typeof this.credentials === 'undefined')
        throw new errors.RequiredParamaterNotSet("Credentials not set. Please refer to README at https://github.com/koustubh25/slack-oauth2 for creating credentials");

    if(this.authEndPoint === '')
        throw new errors.RequiredParamaterNotSet("Auth end point not set. Is it https://slack.com/oauth/authorize");
    this.authUrl = getAuthUrl(this.credentials, this.authEndPoint);
    return this.authUrl;
};

Client.prototype.getAccessToken = function(code, state){

    if(typeof code === 'undefined' || !(typeof code === 'string'))
        throw errors.IllegalValuesError("Code value set to illegal value. The code value is appended to the redirect url");
    var options = {
        'client_id' : this.credentials.client_id,
        'client_secret': this.credentials.client_secret,
        'code': code,
        'redirect_uri': this.credentials.redirect_url,
    };
    if(!(typeof state === 'undefined' || state === ''))
            options.state =state;
    var url = constructUrlEncodedStringFromJson(this.oauthEndPoint, options);
    return getAccessToken(url);


};

module.exports = Client;
