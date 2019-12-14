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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_grid_layout_1 = require("react-grid-layout");
require("react-grid-layout/css/styles.css");
require("react-resizable/css/styles.css");
var ResponsiveGridLayout = react_grid_layout_1.WidthProvider(react_grid_layout_1.Responsive);
var SmartEditor = function (_a) {
    var onLayoutChange = _a.onLayoutChange, editorComponents = _a.editorComponents;
    var _b = react_1.useState([]), layouts = _b[0], setLayouts = _b[1];
    var _c = react_1.useState([]), contents = _c[0], setContents = _c[1];
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
    return (react_1.default.createElement(ResponsiveGridLayout, { breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cols: { lg: 100, md: 80, sm: 60, xs: 40, xxs: 20 }, verticalCompact: false, className: "editor-layout", layouts: getLayout(layouts), rowHeight: 20, onLayoutChange: onLayoutChange, draggableHandle: ".drag-me" }, contents.map(function (content) { return (react_1.default.createElement("div", { key: content.id }, content.attributes.title)); })));
};
exports.SmartEditor = SmartEditor;
//# sourceMappingURL=index.js.map