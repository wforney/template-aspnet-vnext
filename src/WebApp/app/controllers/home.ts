/// <reference path="../../typings/angularjs/angular.d.ts" />
(function (angular) {
    angular.module("app").controller("home", home);

    home.$inject = ["$scope", "$rootScope"];

    function home($scope: any, $rootScope: any) {
        $scope.title = "home";

        // Setup root scope items for header and footer shell.
        $rootScope.footer = {
            year: new Date().getFullYear().toString(),
            company: "Your Company"
        };

        function activate() {
            console.log("TODO: insert code here");
        }

        activate();
    }
} (angular));