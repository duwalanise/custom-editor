"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var component_options_1 = __importDefault(require("./container/component_options"));
var ComponentOverlay = function (_a) {
    var component = _a.component, content = _a.content, onRemove = _a.onRemove, onAdd = _a.onAdd, isActive = _a.isActive, onChangeContent = _a.onChangeContent;
    var _b = react_1.useState(false), showOption = _b[0], setShowOption = _b[1];
    var onAddComponent = function (comp) { return function () {
        setShowOption(false);
        onAdd(comp)();
    }; };
    return (react_1.default.createElement("div", { className: "component-overlay" },
        react_1.default.createElement(component.render, { content: content, isActive: isActive, onChangeContent: onChangeContent }),
        react_1.default.createElement("div", { className: "actions", onClick: function (e) { return e.stopPropagation(); } },
            react_1.default.createElement("span", { className: "drag-me" }, "#"),
            react_1.default.createElement("span", { onClick: function () { return setShowOption(!showOption); } }, "+"),
            react_1.default.createElement("span", { onClick: onRemove(content) }, "X")),
        showOption && react_1.default.createElement(component_options_1.default, { onSelect: onAddComponent })));
};
exports.default = ComponentOverlay;
//# sourceMappingURL=component_overlay.js.map