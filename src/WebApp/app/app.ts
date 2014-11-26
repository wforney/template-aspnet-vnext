/// <reference path="../ng-apps/references.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
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
