// ============================================
// geotab.js
// JAC EV Monitor
// ============================================

// Menyimpan instance API MyGeotab
let geotabApi = null;

geotab.addin.jacEvMonitor = function (api, state) {

    "use strict";

    return {

        // Dipanggil sekali saat Add-In pertama kali dimuat
        initialize: function () {

            geotabApi = api;

            console.log("✅ JAC EV Monitor Initialized");

        },

        // Dipanggil setiap Add-In dibuka
        focus: async function () {

            console.log("📊 Dashboard Active");

            try {

                if (typeof loadDashboard === "function") {

                    await loadDashboard();

                }

            }
            catch (err) {

                console.error("Load Dashboard Error");

                console.error(err);

            }

        },

        // Dipanggil saat berpindah menu
        blur: function () {

            console.log("Dashboard Closed");

        }

    };

};


// ============================================
// Helper
// ============================================

function getApi() {

    if (!geotabApi) {

        throw new Error("MyGeotab API belum diinisialisasi.");

    }

    return geotabApi;

}
