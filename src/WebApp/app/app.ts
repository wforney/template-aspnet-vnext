/// <reference path="../ng-apps/references.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
var dependencies = [
    "ngResource",
    "ngRoute"
];

var app = angular.module("app", dependencies);
angular.bootstrap(document, ["app"]);

app.config(($routeProvider: ng.route.IRouteProvider, $logProvider: ng.ILogProvider) => {
    $logProvider.debugEnabled(true);

    $routeProvider
        .when("/", { templateUrl: "views/home.html", controller: "home" })
        .otherwise({ redirectTo: "/" });
});

app.config([
    "$httpProvider", $httpProvider => {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
    }
]);
