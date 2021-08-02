const { BackLightController } = require("../src/BackLightController");
const { ConfigController } = require("../src/ConfigController");
// SDK level tests will be added here

// Test 1 - Check if toggle urls are working
BackLightController.requestBacklightMode("3D");

// Test 2 - Check if config picking logic is working

var initConfigController = function(win, nav) {
    ConfigController.initialize(win, nav);
    let config = ConfigController.getDisplayConfig();
    console.log("config : "+JSON.stringify(config));
}

let nav = {userAgent: "some-other-device"};
let win = {};
initConfigController(win, nav);

nav = {userAgent: "LPD-10W"};
win = {};
initConfigController(win, nav);
