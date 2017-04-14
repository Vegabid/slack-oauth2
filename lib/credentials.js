var errors = require('./Error');
var utils = require('./util');

module.exports =  {

    create: function(options) {
        if (typeof options === 'undefined')
            return;
        let validateValues = () => {
        if (!validValues(options.client_id, [null, ''], 'string', 'object'))
            throw new errors.IllegalValuesError("Illegal Client id value. It must be a string. You can find client id here https://api.slack.com/apps once you create your own slack app");
        if (!validValues(options.client_secret, [null, ''], 'string', 'object'))
            throw new errors.IllegalValuesError("Illegal Client secret value. It must be a string. You can find client secret here https://api.slack.com/apps once you create your own slack app");
        if (!validValues(options.scope, [null, ''], 'string', Array))
            throw new errors.IllegalValuesError("Illegal scope value. Scope must be an array of scope values. Scope values are listed here https://api.slack.com/docs/oauth-scopes");
        if (!validValues(options.redirect_url, [null, ''], 'string', 'object'))
            throw new errors.IllegalValuesError("Invalid redirect url");
        };
        validateValues();
        return {
            client_id : options.client_id,
            client_secret: options.client_secret,
            scope : options.scope,
            redirect_url : options.redirect_url || '',
            state : options.state || '',
            team : options.team || ''
        }
    }
};


