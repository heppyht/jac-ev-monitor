"use strict";

let geotabApi = null;

geotab.addin.jacEvMonitor = function (api, state) {

    return {

        initialize: function () {

            console.log("Initialize");

            geotabApi = api;

        },

        focus: async function () {

            console.log("Focus");

            await loadDashboard();

        },

        blur: function () {

            console.log("Blur");

        }

    };

};

function getApi() {

    return geotabApi;

}
