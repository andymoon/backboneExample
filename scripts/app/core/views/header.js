define([
    'thumbs',
    'text!../templates/header.handlebars'
], function (thumbs, template) {
    "use strict";

    var HeaderView = thumbs.TemplateView.extend({
        template: template
    });

    return HeaderView;
});
