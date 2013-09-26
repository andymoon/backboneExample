define([
    'thumbs',
    './views/welcome'
], function (thumbs, WelcomeView) {
    "use strict";

    var Router = thumbs.Router.extend({

        containerView: null,

        routes: {
            '': 'index'
        },

        initialize: function (containerView) {
            this._super('initialize', arguments);
            this.containerView = containerView;
        },

        index: function () {
            this.containerView.setView(new WelcomeView().render());
        }
    });

    return Router;
});
