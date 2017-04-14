var Client = require('./lib/Client');
var client = new Client();
client.createCredentials({
    "client_id" : "some id",
    // "client_secret" : "some",
    "scope": ["asdf"],
    "redirect_url": ""
});
client.setAuthEndPoint("https://slack.com/api/oauth.access");

let url = client.getAuthUrl();
console.log(url);
module.exports = require('./lib/Client');
