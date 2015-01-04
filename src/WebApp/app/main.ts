/// <reference path="../typings/requirejs/require.d.ts" />
requirejs.config({
    paths: {
        "text": "../../lib/requirejs-text/text",
        "durandal": "../../lib/durandal/js",
        "plugins": "../../lib/durandal/js/plugins",
        "transactions": "../../lib/durandal/js/transitions",
        "knockout": "../../lib/knockout.js/knockout",
        "bootstrap": "../../lib/bootstrap/js/bootstrap",
        "jquery": "../../lib/jquery/jquery"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "jQuery"
        }
    }
});

define(
    ["durandal/app", "durandal/viewLocator", "durandal/system"],
    (app, viewLocator, system) => {
        //>>excludeStart("build", true);
        system.debug(true);
        //>>excludeEnd("build");

        app.title = "Web application title";

        app.configurePlugins({
            router: true,
            dialog: true,
            widget: true
        });

        viewLocator.useConvention("templates", "templates", "templates");
        viewLocator.viewExtension = ".html";
        viewLocator.viewPlugin = "../../lib/requirejs-text/text";

        app.start().then(() => {
            app.setRoot("templates/shell");
        });
    });