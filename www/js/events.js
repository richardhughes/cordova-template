var Event = function () {
    this.bindEvents();
};

Event.prototype.bindEvents = function () {
    this.registerDeviceReady();
};

Event.prototype.registerDeviceReady = function () {
    document.addEventListener("deviceReady", function () {
        
    }, false);
};