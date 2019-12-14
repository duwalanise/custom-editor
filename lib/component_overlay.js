"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ComponentOverlay = function (_a) {
    var component = _a.component, content = _a.content, onRemove = _a.onRemove, onAdd = _a.onAdd;
    return (react_1.default.createElement("div", { className: "component-overlay" },
        component.render(content.attributes),
        react_1.default.createElement("div", { className: "actions" },
            react_1.default.createElement("span", { className: "drag-me" }, "#"),
            react_1.default.createElement("span", { onClick: onAdd(component) }, "+"),
            react_1.default.createElement("span", { onClick: onRemove(content) }, "X"))));
};
exports.default = ComponentOverlay;
//# sourceMappingURL=component_overlay.js.map