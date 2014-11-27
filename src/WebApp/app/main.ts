/// <reference path="../typings/requirejs/require.d.ts" />
requirejs.config({
    paths: {
        "text": "/lib/requirejs-text/text",
        "durandal": "/lib/durandal/js",
        "plugins": "/lib/durandal/js/plugins",
        "transactions": "/lib/durandal/js/transitions",
        "knockout": "/lib/knockout.js/knockout",
        "jquery": "/lib/jquery/jquery"
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

        app.start().then(() => {
            viewLocator.useConvention();
            app.setRoot("viewmodels/shell");
        });
    });
