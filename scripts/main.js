define([
    'thumbs',
    'jquery',
    'underscore',
    'backbone',
    'app/core/views/container',
    './router',
    'domReady!'
], function (thumbs, $, _, Backbone, ContainerView, Router) {
    "use strict";

    return {
        init: function (domElementId) {
            if (domElementId) {

                //Create and render the Container View.
                var containerView = new ContainerView();
                containerView.render();

                //Append the Container View to the dom element id.
                $(domElementId).append(containerView.$el);

                //Create the Router passing in the container view.
                Router(containerView);

                //This will start the routing and since it's just a static site it needs the html page as the root.
                thumbs.history.start({root: "/example.html/"});
            }
        }
    }
});