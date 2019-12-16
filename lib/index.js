"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var uuidv4_1 = require("uuidv4");
var react_1 = __importStar(require("react"));
var component_overlay_1 = __importDefault(require("./component_overlay"));
var toolbox_1 = __importDefault(require("./toolbox"));
var react_grid_layout_1 = require("react-grid-layout");
require("react-grid-layout/css/styles.css");
require("react-resizable/css/styles.css");
var component_options_1 = __importDefault(require("./container/component_options"));
var ResponsiveGridLayout = react_grid_layout_1.WidthProvider(react_grid_layout_1.Responsive);
var SmartEditor = function (_a) {
    var onLayoutChange = _a.onLayoutChange, editorComponents = _a.editorComponents;
    var _b = react_1.useState(false), showOption = _b[0], setShowOptions = _b[1];
    var _c = react_1.useState([]), layouts = _c[0], setLayouts = _c[1];
    var _d = react_1.useState([]), contents = _d[0], setContents = _d[1];
    var _e = react_1.useState(null), active = _e[0], setActive = _e[1];
    react_1.useEffect(function () {
        var accumulator = {
            layouts: [],
            contents: [],
        };
        accumulator = editorComponents.reduce(function (acc, ec) {
            acc.layouts.push(ec.layout);
            acc.contents.push(ec.content);
            return acc;
        }, __assign({}, accumulator));
        setLayouts(accumulator.layouts);
        setContents(accumulator.contents);
    }, []);
    var getLayout = function (layouts) {
        return {
            lg: layouts,
            md: layouts,
            sm: layouts,
            xs: layouts,
            xxs: layouts,
        };
    };
    var onRemoveComponent = function (contentToRemove) { return function () {
        setLayouts(layouts.filter(function (l) { return l.i !== contentToRemove.id; }));
        setContents(contents.filter(function (c) { return c.id !== contentToRemove.id; }));
    }; };
    var onAddComponent = function (componentToAdd) { return function () {
        var id = uuidv4_1.uuid();
        var newLayout = __assign(__assign({}, componentToAdd.defaultLayout), { i: id });
        var newContent = __assign(__assign({}, componentToAdd.defaultContent), { id: id });
        setLayouts(layouts.concat(newLayout));
        setContents(contents.concat(newContent));
    }; };
    var handleLayoutChange = function (layout, allLayouts) {
        setLayouts(layout);
        onLayoutChange(layout, allLayouts);
    };
    var handleSetActive = function (id) { return function () {
        console.log(id);
        setActive(id);
    }; };
    if (!layouts.length) {
        return (react_1.default.createElement("div", { className: "add-component-wrapper" },
            react_1.default.createElement("div", { className: "add-component" },
                react_1.default.createElement("button", { className: "add-btn", onClick: function () { return setShowOptions(!showOption); } }, "Add Component"),
                showOption && react_1.default.createElement(component_options_1.default, { onSelect: onAddComponent }))));
    }
    return (react_1.default.createElement(ResponsiveGridLayout, { breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cols: { lg: 100, md: 80, sm: 60, xs: 40, xxs: 20 }, className: "editor-layout", layouts: getLayout(layouts), rowHeight: 20, onLayoutChange: handleLayoutChange, draggableHandle: ".drag-me" }, contents.map(function (content) { return (react_1.default.createElement("div", { key: content.id, onClick: handleSetActive(content.id) },
        react_1.default.createElement(component_overlay_1.default, { onRemove: onRemoveComponent, onAdd: onAddComponent, isActive: active === content.id, component: toolbox_1.default(content.type), content: content }))); })));
};
exports.SmartEditor = SmartEditor;
//# sourceMappingURL=index.js.map