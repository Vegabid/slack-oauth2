# slack-oauth2

### Under maintenance. Please come back later.

A simple library to acquire access tokens during oauth2

Please refer https://api.slack.com/docs/oauth for the details on working of Oauth2.0 on slack

### Sample code

In your html page

```
<a href="http://<your domain>/<your path>"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
```

Handling the above page (assuming using express)

```
let app = express();
app.get('/<yourpath>', (req, res) => {

}
```
