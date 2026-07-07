// ===============================================
// JAC EV Monitor
// geotab.js
// ===============================================

"use strict";

// Global API
let geotabApi = null;

geotab.addin.jacEvMonitor = function (api, state) {

    return {

        // Dipanggil sekali saat Add-In pertama kali dibuka
        initialize: async function () {

            console.log("================================");
            console.log("JAC EV Monitor");
            console.log("Initialize");
            console.log("================================");

            geotabApi = api;

        },

        // Dipanggil setiap menu dibuka
        focus: async function () {

            console.log("Focus");

            try {

                await loadDashboard();

            }
            catch (err) {

                console.error(err);

            }

        },

        // Dipanggil ketika berpindah menu
        blur: function () {

            console.log("Blur");

        }

    };

};

// Helper
function getApi() {

    if (!geotabApi) {

        throw new Error("MyGeotab API belum tersedia.");

    }

    return geotabApi;

}
