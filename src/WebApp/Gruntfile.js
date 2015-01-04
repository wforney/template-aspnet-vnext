/// <binding AfterBuild='default' Clean='clean' />
/*global module, require */
module.exports = function (grunt) {
    "use strict";
    require("time-grunt")(grunt);

    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    require("matchdep").filterDev(["grunt-*", "!grunt-template-jasmine-requirejs"]).forEach(grunt.loadNpmTasks);

    // Livereload and connect variables
    var LIVERELOAD_PORT = 35729,
        lrSnippet = require("connect-livereload")({
            port: LIVERELOAD_PORT
        }),
        mountFolder = function (connect, dir) {
            return connect.static(require("path").resolve(dir));
        },
        mixIn = require("mout/object/mixIn"),
        requireConfig = {
            baseUrl: ".tmp/js/app",
            paths: {
                "jquery": "../../lib/jquery/jquery",
                "knockout": "../../lib/knockout.js/knockout",
                "text": "../../lib/requirejs-text/text",
                "durandal": "../../lib/durandal/js",
                "plugins": "../../lib/durandal/js/plugins",
                "transitions": "../../lib/durandal/js/transitions"
            }
        };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        connect: {
            "release": {
                "options": {
                    "port": 9001,
                    "hostname": "localhost",
                    "base": "wwwroot"
                }
            },
            "build": {
                "options": {
                    "port": 8999,
                    "hostname": "localhost",
                    "middleware": function (connect) {
                        return [lrSnippet, mountFolder(connect, ".")];
                    }
                }
            }
        },
        durandal: {
            "main": {
                "src": [".tmp/js/**/*.*", ".tmp/lib/durandal/**/*.js"],
                "options": {
                    "name": "../lib/require/almond-custom",
                    "baseUrl": requireConfig.baseUrl,
                    "mainPath": "js/app/main",
                    "paths": mixIn({}, requireConfig.paths, {
                        "almond": "../lib/require/almond-custom.js"
                    }),
                    "exclude": [],
                    "optimize": "none",
                    "out": ".tmp/js/app/main.js"
                }
            }
        },
        jasmine: {
            build: {
                src: ".tmp/app/templates/*.js",
                options: {
                    specs: "test/specs/dev/**/*spec.js",
                    keepRunner: true,
                    template: require("grunt-template-jasmine-requirejs"),
                    templateOptions: {
                        requireConfig: requireConfig
                    }
                }
            },
            release: {
                options: {
                    specs: "test/specs/build/**/*spec.js",
                    keepRunner: true,
                    template: require("grunt-template-jasmine-requirejs"),
                    templateOptions: {
                        requireConfig: requireConfig
                    }
                }
            }
        }
    });

    require("load-grunt-config")(grunt);

    grunt.registerTask("default", [
        "clean:build",
        "bower:install",
        "copy:build",
        "less",
        "tslint",
        "typescript:build",
        "useminPrepare",
        "concat",
        "imagemin",
        "uglify",
        "cssmin",
        "htmlmin:predurandal",
        "durandaljs",
        "filerev",
        "usemin",
        "htmlmin:build",
        "copy:postbuild",
        //"jasmine:build"
    ]);

    //    grunt.registerTask('default', ['jshint', 'jasmine:dev', 'connect:dev:livereload', 'open:dev', 'watch:dev']);
    //    grunt.registerTask('build', ['jshint', 'jasmine:dev', 'clean', 'copy', 'durandal:main', 'uglify', 'jasmine:build', 'connect:build', 'open:build', 'watch:build']);
};
