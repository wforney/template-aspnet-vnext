/// <reference path="../../../typings/angularjs/angular.d.ts" />
module WebApp.Web.UrlResolver {
    export interface IUrlResolverService {
        base: string;
        resolveUrl(relativeUrl: string);
    }

    class UrlResolverService implements IUrlResolverService {
        private dataUrlBase: string;

        constructor($rootElement: ng.IAugmentedJQuery) {
            this.dataUrlBase = $rootElement.attr("data-url-base");

            // Add trailing slash if not present
            if (this.dataUrlBase === "" || this.dataUrlBase.substr(this.dataUrlBase.length - 1) !== "/") {
                this.dataUrlBase = this.dataUrlBase + "/";
            }
        }

        get base() {
            return this.dataUrlBase;
        }

        resolveUrl(relativeUrl: string) {
            var firstChar = relativeUrl.substr(0, 1);

            if (firstChar === "~") {
                relativeUrl = relativeUrl.substr(1);
            }

            firstChar = relativeUrl.substr(0, 1);

            if (firstChar === "/") {
                relativeUrl = relativeUrl.substr(1);
            }

            return this.dataUrlBase + relativeUrl;
        }
    }
}