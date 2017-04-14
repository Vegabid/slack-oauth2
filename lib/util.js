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

    if(validInstance instanceof Object){
        if(!(element instanceof validInstance  || element.length === 0))
            return false;
    }
    else{
        if(!(typeof(element) === validType))
            return false;
    }

    for(var invalidValue in invalidValues){
        if(element === invalidValue)
            return false;
    }
    return true;
};
