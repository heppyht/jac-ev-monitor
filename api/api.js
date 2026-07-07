"use strict";

async function loadDevices() {

    const api = getApi();

    return new Promise((resolve, reject) => {

        api.call(

            "Get",

            {
                typeName: "Device"
            },

            function (devices) {

                console.log("Device Loaded :", devices.length);

                document.getElementById("totalDevice").textContent =
                    devices.length;

                resolve(devices);

            },

            function (error) {

                console.error(error);

                reject(error);

            }

        );

    });

}
