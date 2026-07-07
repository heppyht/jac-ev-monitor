"use strict";

let geotabApi = null;

geotab.addin.jac_ev_monitor = function (api, state) {

    return {

        initialize: function () {

            console.log("Initialize");

            geotabApi = api;

        },

        focus: async function () {

            console.log("Focus");

            try {

                await loadDashboard();

            }
            catch (err) {

                console.error(err);

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
