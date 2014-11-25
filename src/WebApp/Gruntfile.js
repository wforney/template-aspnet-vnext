/// <binding AfterBuild='default' Clean='clean' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        JS_FILES: "wwwroot/js/**/*.js",
        staticFilePattern: "**/*.{js,css,map,html,htm,ico,jpg,jpeg,png,gif,eot,svg,ttf,woff}",
        pkg: grunt.file.readJSON("package.json"),
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: true
                }
            }
        },
        clean: {
            build: [
                "wwwroot/index.html",
                "wwwroot/css/**/*.css",
                "wwwroot/js/**/*.js"
            ],
            postbuild: [
                "wwwroot/js/app.templates*.js"
            ]
        },
        copy: {
            build: {
                src: "index.html",
                dest: "wwwroot/"
            }
        },
        concat: {
            build: {}
        },
        cssmin: {
            build: {}
        },
        filerev: {
            options: {
                algorithm: "md5",
                encoding: "utf8",
                length: 20
            },
            build: {
                src: [
                    "wwwroot/img/**/*.{gif,jpg,jpeg,png,webp,svg}",
                    "<%= JS_FILES %>",
                    "wwwroot/css/**/*.css",
                    "wwwroot/lib/**/*.{js,css,eot,svg,ttf,woff}"
                ]
            }
        },
        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    "wwwroot/index.html": "wwwroot/index.html"
                }
            }
        },
        jshint: {
            files: ["<%= JS_FILES %>"],
            options: {
                es5: true,
                laxcomma: true
            }
        },
        less: {
            options: {
                compress: true,
                yuicompress: true,
                optimization: 2,
                banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n",
                paths: ["less"]
            },
            files: {
                expand: true,
                cwd: "less/",
                src: ["site.less"],
                dest: "wwwroot/css/",
                ext: ".css"
            }
        },
        ngtemplates: {
            app: {
                src: "app/**/*.html",
                dest: "wwwroot/js/app.templates.js",
                options: {
                    base: "wwwroot/"
                }
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            }
        },
        usemin: {
            html: ["wwwroot/index.html"],
            css: ["wwwroot/**/*.css"],
            options: {
                blockReplacements: {
                    less: function (block) {
                        return "<link rel=\"stylesheet\" href=\"" + block.dest + "\">";
                    }
                }
            }
        },
        useminPrepare: {
            html: ["wwwroot/index.html"],
            options: {
                dest: "wwwroot",
                root: "wwwroot"
            }
        }
    });

    grunt.registerTask("ts", [
        "tslint",
        "tsng",
        "typescript:build",
        "clean:tsng"
    ]);

    // This command registers the default task which will install bower packages into wwwroot/lib
    grunt.registerTask("default", [
        "clean:build",
        "bower:install",
        "copy",
        "ts",
        "jshint",
        "ngtemplates",
        "less",
        "useminPrepare",
        "concat",
        "uglify",
        "cssmin",
        "filerev",
        "usemin",
        "htmlmin",
        "clean:postbuild"
    ]);

    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
};