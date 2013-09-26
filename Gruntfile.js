/*global module:false*/
module.exports = function (grunt) {
    "use strict";

    // Project configuration.

    var config = {

        connect: {
            test: {
                options: {
                    port: 9000,
                    base: '.',
                    hostname: '*'
                }
            },
            testserver: {
                options: {
                    port: 8888,
                    base: '.',
                    hostname: '*'
                }
            }
        }
    };


    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-connect');


    // Default task.
    grunt.registerTask('testserver', ['connect:testserver:keepalive']);

};
