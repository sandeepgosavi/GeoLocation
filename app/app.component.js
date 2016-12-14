"use strict";
var core_1 = require("@angular/core");
//import { Page } from "ui/page";
var geolocation = require("nativescript-geolocation");
var AppComponent = (function () {
    // constructor(private page: Page){
    function AppComponent() {
        this.counter = 4;
        this.btnLocation = "Enable Location";
        this.loc = "";
        this.btnDistance = "Get Distance";
        this.SourceLocation = JSON.parse('{"latitude": 18.5245649, "longitude": 73.7228789, "altitude": 0, "horizontalAccuracy": 0, "verticalAccuracy": 0}');
        this.DestinationLocation = JSON.parse('{"latitude": 19.0827699, "longitude": 72.7411156, "altitude": 0, "horizontalAccuracy": 0, "verticalAccuracy": 0}');
        this.isSourceSet = false;
        this.isDestSet = false;
        if (!geolocation.isEnabled())
            geolocation.enableLocationRequest();
        else {
            this.btnLocation = "Get Location";
        }
    }
    ;
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent.prototype.setSource = function () {
        var _this = this;
        var location = geolocation.getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 })
            .then(function (loc) {
            if (loc) {
                _this.SourceLocation = loc;
                _this.isSourceSet = true;
            }
        });
    };
    AppComponent.prototype.setDestination = function () {
        var _this = this;
        var location = geolocation.getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 })
            .then(function (loc) {
            if (loc) {
                _this.DestinationLocation = loc;
                _this.isDestSet = true;
            }
        });
    };
    AppComponent.prototype.enableLocation = function () {
        var _this = this;
        if (!geolocation.isEnabled())
            geolocation.enableLocationRequest();
        else
            this.btnLocation = "Get Location";
        var location = geolocation.getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 })
            .then(function (loc) {
            if (loc)
                _this.loc = "Latitude: " + loc.latitude + "\n" +
                    "Longitude: " + loc.longitude + "\n" +
                    "Altitude: " + loc.altitude + "\n" +
                    "Horizontal Accuracy: " + loc.horizontalAccuracy + "\n" +
                    "Vertical Accuracy: " + loc.verticalAccuracy;
        });
    };
    AppComponent.prototype.distance = function () {
        this.loc = "Distance Between: " + this.SourceLocation.latitude + ", " + this.SourceLocation.longitude + " and\n" +
            this.DestinationLocation.latitude + ", " + this.DestinationLocation.longitude + ": \n" + ((geolocation.distance(this.SourceLocation, this.DestinationLocation)) / 1000).toString() + " " + "KMs";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map