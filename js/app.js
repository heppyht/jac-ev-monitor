// ===========================================
// JAC EV Monitor
// app.js
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("JAC EV Monitor Started");

    // Database Name
    document.getElementById("databaseName").textContent = "summobility";

    // Initial Time
    updateTime();

    // Refresh Button
    document.getElementById("btnRefresh")
        .addEventListener("click", loadDashboard);

    // Export Button
    document.getElementById("btnExport")
        .addEventListener("click", exportCSV);

    // Time Range
    document.getElementById("timeRange")
        .addEventListener("change", loadDashboard);

});


// ===========================================
// Update Last Refresh Time
// ===========================================

function updateTime() {

    const now = new Date();

    document.getElementById("lastUpdate").textContent =
        now.toLocaleString();

}


// ===========================================
// Load Dashboard
// ===========================================

async function loadDashboard() {

    console.log("Loading Dashboard...");

    try {

        await loadDevices();

        updateTime();

    }
    catch (err) {

        console.error("Load Dashboard Error");

        console.error(err);

    }

}


// ===========================================
// Load Device
// ===========================================

async function loadDevices() {

    const api = getApi();

    if (!api) {

        console.error("MyGeotab API belum tersedia.");

        return;

    }

    return new Promise((resolve, reject) => {

        api.call(
            "Get",
            {
                typeName: "Device"
            },

            function (devices) {

                console.log("Device List");

                console.table(devices);

                // KPI
                document.getElementById("totalDevices").textContent =
                    devices.length;

                resolve(devices);

            },

            function (error) {

                console.error("Get Device Error");

                console.error(error);

                reject(error);

            }

        );

    });

}


// ===========================================
// Export CSV
// ===========================================

function exportCSV() {

    console.log("Export CSV");

}
