/*globals require:true*/
var require;
(function (require) {
    "use strict";
    function config(require) {
        require.config({
            baseUrl: '/scripts/',

            paths: {
                jquery: "empty:", // !important - build will fail without this
                underscore: './assets/vendor/underscore/underscore',
                backbone: './assets/vendor/backbone/backbone',
                handlebars: './assets/vendor/handlebars/handlebars',

                // Require.js plugins
                text: './assets/vendor/requirejs-text/text',
                domReady: './assets/vendor/requirejs-domready/domReady',

                thumbs: './assets/vendor/thumbs/thumbs',
                dynatree: 'http://wwwendt.de/tech/dynatree/src/jquery.dynatree',
                widgets: './widgets/'
            },

            // these libs are not written for AMD. Make them behave like they are
            shim: {
                handlebars: {
                    exports: 'Handlebars'
                },
                underscore: {
                    exports: '_'
                },
                backbone: {
                    deps: ['underscore', 'jquery'],
                    exports: 'Backbone'
                },
                thumbs: {
                    deps: ['underscore', 'backbone', 'jquery']
                },
                dynatree: {
                    deps: ['jquery']
                }
            }
        });
    }

    if (require) {
        config(require);
    } else {
        var self = this;
        config({
            config: function (conf) {
                self.require = conf;
            }
        });
    }
}).call(this, require);
