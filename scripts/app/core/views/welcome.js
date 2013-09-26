define([
    'thumbs',
    'text!../templates/welcome.handlebars'
], function (thumbs, template) {
    "use strict";

    var WelcomeView = thumbs.TemplateView.extend({
        template: template
    });

    return WelcomeView;
});
