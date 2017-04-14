var Client = require('./lib/Client');
var client = new Client();
client.createCredentials({
    "client_id" : "some id",
    "client_secret" : "some secret",
    "scope": "asdf"
});


module.exports = require('./lib/Client');
