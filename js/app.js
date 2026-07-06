document.addEventListener("DOMContentLoaded", () => {

    console.log("JAC EV Monitor Started");

});

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("databaseName").textContent = "summobility";

});

function updateTime() {

    const now = new Date();

    document.getElementById("lastUpdate").textContent =

        now.toLocaleString();

}

updateTime();

document.addEventListener("DOMContentLoaded", () => {

    const refreshButton = document.getElementById("btnRefresh");

    refreshButton.addEventListener("click", () => {

        loadDashboard();

    });

});

function loadDashboard() {

    const timeRange = document.getElementById("timeRange").value;

    console.log("Load Dashboard");

    console.log("Time Range :", timeRange);

}

const timeRange = document.getElementById("timeRange");

timeRange.addEventListener("change", () => {

    loadDashboard();

});

document.getElementById("btnExport")

    .addEventListener("click", () => {

        exportCSV();

    });

function exportCSV() {

    console.log("Export CSV");

}

async function loadDashboard() {

    console.log("Loading Dashboard...");

    await loadDevices();

}