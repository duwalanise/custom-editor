"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// add custom created components over here
exports.CustomComponents = {
    paragraph: {
        title: 'Paragraph',
        defaultLayout: { x: 1, y: 0, w: 100, h: 5 },
        defaultContent: { type: 'paragraph', attributes: { title: 'Hello there' } },
        render: function (attributes) {
            return attributes.title;
        },
    },
};
exports.default = (function (type) {
    return exports.CustomComponents[type];
});
//# sourceMappingURL=toolbox.js.map