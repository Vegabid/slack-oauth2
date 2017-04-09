module.exports =  {

    create: function(options){
        return {
            client_id : options.clientId || '',
            client_secret: options.clientSecret || '',
            scope : options.scope || [],
            redirect_url : options.redirectUrl || '',
            state : options.state || '',
            team : options.team || ''
        }
    }
};


