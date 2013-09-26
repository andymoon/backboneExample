define([
    'thumbs',
    './header',
    './side',
    'text!../templates/container.handlebars'
], function (thumbs, Header, Side, template) {
    "use strict";

    var AppView = thumbs.TemplateView.extend({
        template: template,
        Header: Header,
        Side: Side,

        setView: function (view) {
            //This will remove the previous view and add the new view to the dom element.
            return this.addSubView("#core-container", view);
        }
    });

    return AppView;
});
