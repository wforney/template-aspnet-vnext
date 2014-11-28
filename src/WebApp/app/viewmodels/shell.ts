/// <reference path="../../typings/requirejs/require.d.ts" />
define("shell", function (require) {
    var router = require("plugins/router");

    return {
        router: router,
       activate() {
            router.map([
                { route: "", title: "Home", moduleId: "home", nav: true },
                { route: "rainier", title: "Mount Rainier", moduleId: "rainier", nav: true }
            ]).buildNavigationModel();

           return router.activate();
        }
    };
});