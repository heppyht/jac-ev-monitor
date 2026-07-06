// Menyimpan instance API MyGeotab
let geotabApi = null;

geotab.addin.jacEvMonitor = function (api, state) {

    "use strict";

    return {

        initialize: function () {

            geotabApi = api;

            console.log("Add-In Initialized");

        },

        focus: function () {

            console.log("Dashboard Active");

        },

        blur: function () {

            console.log("Dashboard Closed");

        }

    };

};

// Fungsi untuk mengambil API dari file lain
function getApi() {

    return geotabApi;

}