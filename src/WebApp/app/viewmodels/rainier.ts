/// <reference path="../../typings/requirejs/require.d.ts" />
define(function (require) {
    var http = require("plugins/http"),
        ko = require("knockout");

    var url = "http://api.flickr.com/services/feeds/photos_public.gne";

    var qs = {
        tags: "mount ranier",
        tagmode: "any",
        format: "json"
    };

    return {
        images: ko.observableArray([]),
        activate() {
            if (this.images().length > 0) {
                return;
            }

            return http.jsonp(url, qs, "jsoncallback").then(response => {
                this.images(response.items);
            });
        }
    };
});
