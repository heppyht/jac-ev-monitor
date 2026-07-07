async function loadDevices() {

    try {

        const api = getApi();

        console.log("API :", api);

        api.call(
            "Get",
            {
                typeName: "Device"
            },
            function (devices) {

                console.log("SUCCESS");
                console.log(devices);

                document.getElementById("totalDevices").textContent =
                    devices.length;

            },
            function (error) {

                console.error("API ERROR");
                console.error(error);

            }
        );

    }
    catch (err) {

        console.error("LOAD DEVICE ERROR");
        console.error(err);

    }

}
