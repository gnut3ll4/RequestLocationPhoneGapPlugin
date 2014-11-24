var requestLocation = {
    enableLocation: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'RequestLocation', // mapped to our native Java class called "Calendar"
            'enableLocation' // with this action name
        );
    }
}

module.exports = requestLocation;
