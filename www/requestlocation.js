var requestLocation = {
    isLocationEnabled: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'RequestLocation', // mapped to our native Java class called "Calendar"
            'isLocationEnabled' // with this action name
        );
    }
}

module.exports = requestLocation;
