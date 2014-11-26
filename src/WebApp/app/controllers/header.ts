/// <reference path="../../typings/angularjs/angular.d.ts" />
angular.module("app").controller("header", header);

header.$inject = ["$scope"];

function header($scope: any) {
    $scope.title = "header";

    function activate() {
        console.log("TODO: insert code here");
    }

    activate();
}
