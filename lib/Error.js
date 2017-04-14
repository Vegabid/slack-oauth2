class ExtendableError extends Error {
    constructor(message, name) {
        super(message);
        this.name = name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

class IllegalValuesError extends ExtendableError {
    constructor(message){
        super(message, "IllegalValuesError");
    }
}

class RequiredParamaterNotSet extends ExtendableError{
    constructor(message){
        super(message, "RequiredParamaterNotSet");
    }

}


var errors = {
    "IllegalValuesError" : IllegalValuesError,
    "RequiredParamaterNotSet" : RequiredParamaterNotSet
};

module.exports = errors;
