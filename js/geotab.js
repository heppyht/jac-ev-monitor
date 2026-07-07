"use strict";

let geotabApi = null;

geotab.addin.jacEvMonitor = function (api, state) {

    return {

        initialize: async function () {

            console.log("Initialize");

            geotabApi = api;

            try {

                await loadDashboard();

            } catch (err) {

                console.error(err);

            }

        },

        focus: function () {

            console.log("Focus");

        },

        blur: function () {

            console.log("Blur");

        }

    };

};

function getApi() {

    return geotabApi;

}
