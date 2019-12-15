"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var toolbox_1 = require("../toolbox");
var ComponentOptions = function (_a) {
    var onSelect = _a.onSelect;
    return (react_1.default.createElement("ul", { className: "component-options" }, Object.keys(toolbox_1.CustomComponents).map(function (comp) { return (react_1.default.createElement("li", { key: comp, onClick: onSelect(toolbox_1.CustomComponents[comp]) }, comp)); })));
};
exports.default = ComponentOptions;
//# sourceMappingURL=component_options.js.map