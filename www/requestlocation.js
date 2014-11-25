

var exec = require("cordova/exec");

function RequestLocation() {};

RequestLocation.prototype.enableLocation = function (successCallback, errorCallback) {
    exec(
    successCallback, // success callback function
    errorCallback, // error callback function
    'RequestLocation', // mapped to our native Java class called "RequestLocation"
    'enableLocation', // with this action name
    []
    );
};

RequestLocation.prototype.isLocationEnabled = function (successCallback, errorCallback) {
    exec(
    successCallback, // success callback function
    errorCallback, // error callback function
    'RequestLocation', // mapped to our native Java class called "RequestLocation"
    'isLocationEnabled', // with this action name
    []
    );
};


module.exports = new RequestLocation();





