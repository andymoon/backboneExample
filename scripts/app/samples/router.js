define([
    'thumbs',
    './views/dynatree_sample'
], function (thumbs, DynatreeSampleView) {
    "use strict";

    var Router = thumbs.Router.extend({

        containerView: null,

        routes: {
            'samples/dynatree': 'dynatreeRouter'
        },

        initialize: function (containerView) {
            this._super('initialize', arguments);
            this.containerView = containerView;
        },

        dynatreeRouter: function () {
            this.containerView.setView(new DynatreeSampleView().render());
        }
    });

    return Router;
});
