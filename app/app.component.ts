import { Component } from "@angular/core";
//import { Page } from "ui/page";
var geolocation = require("nativescript-geolocation");

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 4;
    btnLocation = "Enable Location";
    loc = "";
    btnDistance = "Get Distance";
    SourceLocation = JSON.parse('{"latitude": 18.5245649, "longitude": 73.7228789, "altitude": 0, "horizontalAccuracy": 0, "verticalAccuracy": 0}');;
    DestinationLocation = JSON.parse('{"latitude": 19.0827699, "longitude": 72.7411156, "altitude": 0, "horizontalAccuracy": 0, "verticalAccuracy": 0}');
    isSourceSet = false;
    isDestSet = false;

    // constructor(private page: Page){
    constructor(){
        if(!geolocation.isEnabled())
            geolocation.enableLocationRequest();
        else {
            this.btnLocation = "Get Location";
        }
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }

    setSource() {
        let location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000})
                        .then (loc => {
                            if(loc) {
                                this.SourceLocation = loc;
                                this.isSourceSet = true;
                            }
                        });
    }

    setDestination() {
        let location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000})
                        .then (loc => {
                            if(loc) {
                                this.DestinationLocation = loc;
                                this.isDestSet = true;
                            }
                        });
    }

    enableLocation() {
        if(!geolocation.isEnabled())
            geolocation.enableLocationRequest();
        else
            this.btnLocation = "Get Location";
        let location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000})
                        .then (loc => {
                            if(loc)
                                this.loc = "Latitude: " + loc.latitude + "\n" +
                                "Longitude: " + loc.longitude + "\n" +
                                "Altitude: " + loc.altitude + "\n" +
                                "Horizontal Accuracy: " + loc.horizontalAccuracy + "\n" +
                                "Vertical Accuracy: " + loc.verticalAccuracy;
                        });
    }

    distance(){
        this.loc = "Distance Between: " + this.SourceLocation.latitude + ", " + this.SourceLocation.longitude + " and\n" +
        this.DestinationLocation.latitude + ", " + this.DestinationLocation.longitude + ": \n" + ((geolocation.distance(this.SourceLocation, this.DestinationLocation)) / 1000).toString() + " " + "KMs";
    }
}
