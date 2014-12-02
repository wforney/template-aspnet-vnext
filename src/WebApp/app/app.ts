/// <reference path="../typings/jquery/jquery.d.ts" />
interface Window {
    _uacct: string;
    urchinTracker: any;
    initLightbox: any;
};

// Avoid `console` errors in browsers that lack a console.
(function () {
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
} ());

$(document).ready(function () {
    $(".alert").addClass("in").fadeOut(4500);

    /* swap open/close side menu icons */
    $("[data-toggle=collapse]").click(function () {
        // toggle icon
        $(this).find("i").toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
    });

    window._uacct = "UA-2047560-1";
    window.urchinTracker();
});

function MM_swapImgRestore() { //v3.0
    var i, x, a = (<any>document).MM_sr;
    for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) {
        x.src = x.oSrc;
    }
}

function MM_preloadImages() { //v3.0
    var d = (<any>document);
    if (d.images) {
        if (!d.MM_p) {
            d.MM_p = new Array();
        }

        var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++) {
            if (a[i].indexOf("#") !== 0) {
                d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i];
            }
        }
    }
}

function MM_findObj(n, d?) { //v4.01
    var p, i, x;
    if (!d) {
        d = document;
    }

    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }

    if (!(x = d[n]) && d.all) {
        x = d.all[n];
    }

    for (i = 0; !x && i < d.forms.length; i++) {
        x = d.forms[i][n];
    }

    for (i = 0; !x && d.layers && i < d.layers.length; i++) {
        x = MM_findObj(n, d.layers[i].document);
    }

    if (!x && d.getElementById) {
        x = d.getElementById(n);
    }

    return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0, x, a = MM_swapImage.arguments;

    (<any>document).MM_sr = new Array;

    for (i = 0; i < (a.length - 2); i += 3) {
        if ((x = MM_findObj(a[i])) != null) {
            (<any>document).MM_sr[j++] = x;
            if (!x.oSrc) {
                x.oSrc = x.src;
            }

            x.src = a[i + 2];
        }
    }
}
