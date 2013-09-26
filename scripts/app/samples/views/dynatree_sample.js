define([
    'thumbs',
    'underscore',
    'widgets/tree',
    'text!../templates/dynatree_sample.handlebars'
], function (thumbs, _, Tree, template) {
    "use strict";

    var DynatreeSampleView = thumbs.TemplateView.extend({
        template: template,

        render: function () {
            this._super("render", arguments);
            var tree = this.tree = new Tree({
                children: [
                    {title: "Item 1"},
                    {title: "Folder 2", isFolder: true, key: "folder2",
                        children: [
                            {title: "Sub-item 2.1"},
                            {title: "Sub-item 2.2"}
                        ]
                    },
                    {title: "Item 3"}
                ]
            });
            this.$treeDiv.append(tree.render().$el);

            //Listen to the click event on the tree.
            this.listenTo(tree, "click", _.bind(this.onTreeClick,this));

            return this;
        },

        onTreeClick:function(node){
            this.$nodeClickText.text(node.data.title).fadeIn().fadeOut("slow");
            node._expand();
        }

    });

    return DynatreeSampleView;
});
