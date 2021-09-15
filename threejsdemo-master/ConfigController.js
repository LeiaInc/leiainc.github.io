import {DeviceIds, DisplayConfigs, DeviceIdConfigMap } from "sevensummitswebglsdkdemo/src/Constants";

export default {
    initialize(window, navigator) {

        var userAgent = navigator.userAgent;
        for(let i = 0; i < DeviceIds.length; i++) {
            let deviceId = DeviceIds[i];
            if(userAgent.indexOf(deviceId) !== -1) {
                this.displayConfig = DisplayConfigs[DeviceIdConfigMap[deviceId]];
            }
        }

        if(!this.displayConfig) {
            //SDKLogger.logWarning("Unsupported Device");
        }
    },

    getDisplayConfig() {
        return this.displayConfig;
    },

    getDisplayConfigForDevice(deviceId) {
        this.displayConfig = DisplayConfigs[DeviceIdConfigMap[deviceId]];
        return this.displayConfig;
    }
}