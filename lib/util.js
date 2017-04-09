constructUrlEncodedStringFromJson = function(baseUri, options){
    var url = baseUri;
    var urlEncodedComponent = '?';
    for(key in options){
        urlEncodedComponent += key + '=' + options[key] + '&';
    }
    var urlEncodedString = url + urlEncodedComponent;

    return urlEncodedString.substring(0, urlEncodedString.length-1);
};

