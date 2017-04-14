var Client = require('./lib/Client');
var client = new Client();
client.createCredentials({
    "client_id" : "someid",
    "client_secret" : "some",
    "scope": ["asdf", "sdff"],
    "redirect_url": "asdfasdf"
});
client.setAuthEndPoint("https://slack.com/api/oauth.access");
//
let url = client.getAuthUrl();
console.log(url);
module.exports = require('./lib/Client');
