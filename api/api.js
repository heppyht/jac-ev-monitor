function getDevices() {

    const api = getApi();

    console.log(api);

}

async function loadDevices() {

    const api = getApi();

    api.call(
        "Get",
        {
            typeName: "Device"
        },
        function (result) {

            console.log(result);

        },
        function (error) {

            console.error(error);

        }
    );

}