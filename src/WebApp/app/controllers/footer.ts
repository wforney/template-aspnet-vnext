/// <reference path="../../typings/angularjs/angular.d.ts" />
angular.module("app").controller("footer", footer);

footer.$inject = ["$scope"];

function footer($scope: any) {
    $scope.title = "footer";

    function activate() {
        console.log("TODO: insert code here");
    }

    activate();
}
