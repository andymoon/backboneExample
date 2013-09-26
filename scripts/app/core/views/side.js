define([
    'thumbs',
    'text!../templates/side.handlebars'
], function (thumbs, template) {
    "use strict";

    var SideView = thumbs.TemplateView.extend({
        template: template,

        //This method was bound to the click of the anchor tag in the template.
        onWelcomeClick: function(ev){
            thumbs.history.navigate("", { trigger: true });
            ev.stopPropagation();
            return false;
        },

        //This method was bound to the click of the anchor tag in the template.
        onDynaTreeExampleClick: function(ev){
            thumbs.history.navigate("/samples/dynatree", { trigger: true });
            ev.stopPropagation();
            return false;
        }
    });

    return SideView;
});
