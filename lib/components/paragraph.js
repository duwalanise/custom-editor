"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Paragraph = function (_a) {
    var attributes = _a.attributes;
    return react_1.default.createElement("p", null, attributes.title);
};
exports.default = {
    title: 'Paragraph',
    defaultLayout: { x: 1, y: 0, w: 100, h: 5 },
    defaultContent: {
        type: 'paragraph',
        attributes: { title: 'This is a new Paragraph' },
    },
    render: function (attributes) { return react_1.default.createElement(Paragraph, { attributes: attributes }); },
};
//# sourceMappingURL=paragraph.js.map