/// <reference path="../../typings/angularjs/angular.d.ts" />
angular.module("app").controller("home", home);

home.$inject = ["$scope"];

function home($scope: any) {
    $scope.title = "home";

    function activate() {
        console.log("TODO: insert code here");
    }

    activate();
}
