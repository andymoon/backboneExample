define([
    'thumbs',
    'underscore',
    'jquery',
    'dynatree',
    'text!./templates/tree.handlebars'
], function (thumbs, _, $, DynaTree, template) {
    "use strict";

    var Tree = thumbs.TemplateView.extend({
        template: template,
        children: null,

        initialize: function (options) {
            this._super('initialize', arguments);
            if (options && options.children){
                this.children = options.children;
            }
        },

        render: function () {
            this._super('render', arguments);
            this.$treeNode.dynatree({
                onClick: _.bind(this.onTreeClick, this),
                children:this.children
            });

            return this;
        },

        onTreeClick: function (node, event) {
            this.trigger("click", node, event);
        }
    });

    return Tree;
});
