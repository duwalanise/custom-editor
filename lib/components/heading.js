"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Heading = function (_a) {
    var attributes = _a.attributes;
    return react_1.default.createElement("h1", null, attributes.title);
};
exports.default = {
    title: 'Heading',
    defaultLayout: { x: 1, y: 0, w: 100, h: 5 },
    defaultContent: {
        type: 'heading',
        attributes: { title: 'This is a new Heading' },
    },
    render: function (attributes) { return react_1.default.createElement(Heading, { attributes: attributes }); },
};
//# sourceMappingURL=heading.js.map