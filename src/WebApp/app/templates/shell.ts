/// <reference path="../../typings/requirejs/require.d.ts" />
define("shell", ["plugins/router", "durandal/app"], function (router, app) {
    return {
        router: router,
        search() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage("Search not yet implemented...");
        },
        activate() {
            router.map([
                { route: "", title: "Home", moduleId: "home", nav: true },
                { route: "rainier", title: "Mount Rainier", moduleId: "rainier", nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});