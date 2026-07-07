// ===============================================
// JAC EV Monitor
// app.js
// ===============================================

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    console.log("HTML Loaded");

    // Database
    document.getElementById("databaseName").textContent = "summobility";

    updateTime();

    document
        .getElementById("btnRefresh")
        .addEventListener("click", loadDashboard);

    document
        .getElementById("btnExport")
        .addEventListener("click", exportCSV);

    document
        .getElementById("timeRange")
        .addEventListener("change", loadDashboard);

});


// ===============================================
// Update Time
// ===============================================

function updateTime() {

    document.getElementById("lastUpdate").textContent =
        new Date().toLocaleString();

}


// ===============================================
// Dashboard
// ===============================================

async function loadDashboard() {

    console.log("--------------------------------");
    console.log("Loading Dashboard");
    console.log("--------------------------------");

    try {

        await loadDevices();

        updateTime();

    }
    catch (err) {

        console.error(err);

    }

}


// ===============================================
// Device
// ===============================================

async function loadDevices() {

    const api = getApi();

    return new Promise((resolve, reject) => {

        api.call(

            "Get",

            {

                typeName: "Device"

            },

            function (devices) {

                console.log("SUCCESS");

                console.table(devices);

                document.getElementById("totalDevice").textContent =
                    devices.length;

                renderVehicleTable(devices);

                resolve(devices);

            },

            function (error) {

                console.error(error);

                reject(error);

            }

        );

    });

}


// ===============================================
// Vehicle Table
// ===============================================

function renderVehicleTable(devices) {

    const tbody =
        document.querySelector("#vehicleTable tbody");

    tbody.innerHTML = "";

    devices.forEach((device, index) => {

        tbody.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${device.name}</td>

            <td>${device.serialNumber || "-"}</td>

            <td>-</td>

            <td>-</td>

            <td>-</td>

            <td>-</td>

            <td>-</td>

            <td>-</td>

            <td>-</td>

            <td>-</td>

            <td>-</td>

            <td>-</td>

        </tr>

        `;

    });

}


// ===============================================
// Export
// ===============================================

function exportCSV() {

    console.log("Export CSV");

}
