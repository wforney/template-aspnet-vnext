/// <binding AfterBuild='default' Clean='clean' />
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
        "tsng",
        "typescript:build",
        "clean:tsng"
    ]);

    // This command registers the default task which will install bower packages into wwwroot/lib
    grunt.registerTask("default", [
        "clean:build",
        "bower:install",
        "copy",
        //"jshint",
        "ts",
        "less",
        "useminPrepare",
        "ngtemplates",
        "concat",
        "imagemin",
        "uglify",
        "cssmin",
        "filerev",
        "usemin",
        "htmlmin",
        "clean:postbuild"
    ]);

    require("load-grunt-config")(grunt);
};