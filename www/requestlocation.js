    var RequestLocationLoader = function (require) {

        var exec = require("cordova/exec");

        function RequestLocation() {};

        RequestLocation.prototype.enableLocation = function (successCallback, errorCallback) {
            exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'RequestLocation', // mapped to our native Java class called "RequestLocation"
            'enableLocation' // with this action name
			);
        };

       
        var requestLocation = new RequestLocation();
        module.exports = requestLocation;

    }

    RequestLocationLoader(require);

    cordova.define("cordova/plugin/RequestLocation", RequestLocationLoader);





