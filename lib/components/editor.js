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
var react_1 = __importStar(require("react"));
// Require Editor CSS files.
require("froala-editor/css/froala_style.min.css");
require("froala-editor/css/froala_editor.pkgd.min.css");
var react_froala_wysiwyg_1 = __importDefault(require("react-froala-wysiwyg"));
var FroalaEditor = function (_a) {
    var content = _a.content, isActive = _a.isActive, onChangeContent = _a.onChangeContent;
    var _b = react_1.useState(content.attributes.model), model = _b[0], setModel = _b[1];
    var handleModelChange = function (newModel) {
        setModel(newModel);
        onChangeContent(__assign(__assign({}, content), { attributes: __assign(__assign({}, content.attributes), { model: newModel }) }));
    };
    return (react_1.default.createElement(react_froala_wysiwyg_1.default, { tag: "textarea", config: {
            placeHolder: 'Type here',
            toolbarInline: true,
            charCounterCount: false,
            toolbarVisibleWithoutSelection: true,
        }, model: model, onModelChange: handleModelChange }));
};
exports.default = {
    title: 'FroalaEditor',
    defaultLayout: { w: 50, h: 10 },
    defaultContent: {
        type: 'FroalaEditor',
        attributes: { model: 'This is a new FroalaEditor' },
    },
    render: FroalaEditor,
};
//# sourceMappingURL=editor.js.map