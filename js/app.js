// ===============================================
// JAC EV Monitor
// app.js
// ===============================================

"use strict";

// ===============================================
// Initial Page
// ===============================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("JAC EV Monitor HTML Loaded");

    // Database Name
    const db = document.getElementById("databaseName");
    if (db) {
        db.textContent = "summobility";
    }

    updateTime();

    // Refresh
    document
        .getElementById("btnRefresh")
        ?.addEventListener("click", loadDashboard);

    // Export
    document
        .getElementById("btnExport")
        ?.addEventListener("click", exportCSV);

    // Time Range
    document
        .getElementById("timeRange")
        ?.addEventListener("change", loadDashboard);

});


// ===============================================
// Update Last Refresh Time
// ===============================================

function updateTime() {

    const el = document.getElementById("lastUpdate");

    if (el) {

        el.textContent = new Date().toLocaleString("id-ID");

    }

}


// ===============================================
// Dashboard
// ===============================================

async function loadDashboard() {

    console.log("================================");
    console.log("Loading Dashboard...");
    console.log("================================");

    try {

        // fungsi ini berada di api/api.js
        const devices = await loadDevices();

        renderVehicleTable(devices);

        updateTime();

    }
    catch (err) {

        console.error("Dashboard Error");

        console.error(err);

    }

}


// ===============================================
// Render Vehicle Table
// ===============================================

function renderVehicleTable(devices) {

    const tbody =
        document.querySelector("#vehicleTable tbody");

    if (!tbody) return;

    tbody.innerHTML = "";

    if (!devices || devices.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="13" style="text-align:center">
                    No data available
                </td>
            </tr>
        `;

        return;

    }

    devices.forEach((device, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${index + 1}</td>
            <td>${device.name ?? "-"}</td>
            <td>${device.serialNumber ?? "-"}</td>
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

        `;

        tbody.appendChild(row);

    });

}


// ===============================================
// Export CSV
// ===============================================

function exportCSV() {

    console.log("Export CSV");

}
