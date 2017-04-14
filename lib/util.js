constructUrlEncodedStringFromJson = function(baseUri, options){
    var url = baseUri;
    var urlEncodedComponent = '?';
    for(key in options){
        urlEncodedComponent += key + '=' + options[key] + '&';
    }
    var urlEncodedString = url + urlEncodedComponent;

    return urlEncodedString.substring(0, urlEncodedString.length-1);
};

validValues = (element, invalidValues, validType, validInstance) => {

    console.log(validInstance);
    if(!( (element instanceof validInstance) || (typeof(element) === validType)))
        return false;
    for(var invalidValue in invalidValues){
        if(element === invalidValue)
            return false;
    }
    return true;
};

