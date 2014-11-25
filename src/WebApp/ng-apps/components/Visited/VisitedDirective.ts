/// <reference path="../../../typings/angularjs/angular.d.ts" />
module WebApp.Web.Visited {
    interface IVisitedFormController extends ng.IFormController {
        focus?: boolean;
        visited?: boolean;
    }

    //@NgDirective('input')
    //@NgDirective('select')
    class VisitedDirective implements ng.IDirective {
        private windowService: ng.IWindowService;

        constructor($window: ng.IWindowService) {
            this.windowService = $window;
        }

        restrict = "E";
        require = "?ngModel";

        link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: IVisitedFormController) {
            if (!ctrl) {
                return;
            }

            element.on("focus", event => {
                element.addClass("has-focus");
                scope.$apply(() => ctrl.focus = true);
            });

            element.on("blur", event => {
                element.removeClass("has-focus");
                element.addClass("has-visited");
                scope.$apply(() => {
                    ctrl.focus = false;
                    ctrl.visited = true;
                });
            });

            element.closest("form").on("submit", () => {
                element.addClass("has-visited");

                scope.$apply(() => {
                    ctrl.focus = false;
                    ctrl.visited = true;
                });
            });
        }
    }
}