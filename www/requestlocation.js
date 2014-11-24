    var RequestLocationLoader = function (require, exports, module) {

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

    RequestLocationLoader(require, exports, module);

    cordova.define("cordova/plugin/RequestLocation", RequestLocationLoader);





