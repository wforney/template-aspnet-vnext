/// <reference path="../ng-apps/references.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {
        // noop
    };
    var methods = [
        "assert", "clear", "count", "debug", "dir", "dirxml", "error",
        "exception", "group", "groupCollapsed", "groupEnd", "info", "log",
        "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd",
        "timeStamp", "trace", "warn"
    ];
    var length = methods.length;
    var console = (window.console = window.console || <any>{});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function () {
    $(".alert").addClass("in").fadeOut(4500);

    /* swap open/close side menu icons */
    $("[data-toggle=collapse]").click(function () {
        // toggle icon
        $(this).find("i").toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
    });
});

angular.module(
    "app", [
        "ngResource",
        "ngRoute"
    ]).config([
        "$routeProvider",
        "$logProvider",
        ($routeProvider: ng.route.IRouteProvider, $logProvider: ng.ILogProvider) => {
            $logProvider.debugEnabled(true);

            $routeProvider
                .when("/", { templateUrl: "views/home.html", controller: "home" })
                .otherwise({ redirectTo: "/" });
        }
    ]);
