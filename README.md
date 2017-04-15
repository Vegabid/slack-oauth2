# slack-oauth2

A simple library to quickly acquire access tokens following oauth2 protocol.

Please refer https://api.slack.com/docs/oauth for the details on working of Oauth2.0 on slack

Tested with slack oauth2 authentication.

### Installation

You can install using npm

`npm install https://github.com/koustubh25/slack-oauth2.git --save`

### Sample code

In express

```
var express = require('express');
var Client = require('oauth2');
var client = new Client();
client.createCredentials({
    "client_id" : process.env.CLIENT_ID,
    "client_secret" : process.env.CLIENT_SECRET,
    "scope": ["channels:read", "chat:write:bot"],
    "redirect_url": "<your redirect url>"
});
client.setAuthEndPoint("https://slack.com/oauth/authorize");
client.setOauthEndPoint("https://slack.com/api/oauth.access");

var app = express();

app.get('/<add slack button page>', (req, res, next) => {
    res.write('<a href="' + client.getAuthUrl() + '">
                <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
                </a>');
    res.end();
});

app.get('/<your redirect url>', (req, res, next) => {
    let code = req.param("code");
    let state = req.param("state");
    let access_token = client.getAccessToken(code, state).then((result) => {
       console.log(result);
    })
        .catch((err) => {
            console.log(err);
        });
    res.write('<h1> My Page </h1>);
    res.end();

});
```
Result contains code like the following:

```
{
    "ok":true,
    "access_token":"<Your access token>",
    "scope":"channels:read,chat:write:bot",
    "user_id":"<some user id>",
    "team_name":"<some name>",
    "team_id":"<some id>"
}
```


