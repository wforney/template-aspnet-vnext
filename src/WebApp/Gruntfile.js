/// <binding AfterBuild='default' Clean='clean' />
/*global module, require */
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    require("time-grunt")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json")
    });

    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask("ts", [
        "tslint",
        "typescript:build"
    ]);

    // This command registers the default task which will install bower packages into wwwroot/lib
    grunt.registerTask("default", [
        "clean",
        "bower:install",
        "jshint",
        "ts",
        "less",
        "useminPrepare",
        "imagemin",
        "uglify",
        "cssmin",
        "requirejs",
        "filerev",
        "usemin",
        "htmlmin"
    ]);

    require("load-grunt-config")(grunt);
};