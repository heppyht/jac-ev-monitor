"use strict";

let geotabApi = null;

geotab.addin.jacEvMonitor = function (api, state) {

    return {

        initialize: function () {

            console.log("Initialize");

            geotabApi = api;

        },

        focus: function () {

            console.log("Focus");

            if (typeof loadDashboard === "function") {

                loadDashboard();

            } else {

                console.error("loadDashboard tidak ditemukan");

            }

        },

        blur: function () {

            console.log("Blur");

        }

    };

};

function getApi() {

    return geotabApi;

}
