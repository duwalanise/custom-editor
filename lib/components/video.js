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
var Video = function (_a) {
    var content = _a.content, isActive = _a.isActive, onChangeContent = _a.onChangeContent;
    var _b = react_1.useState(content.attributes.title), title = _b[0], setTitle = _b[1];
    var handleChange = function (ev) {
        setTitle(ev.target.value);
    };
    var getId = function () {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        var match = (content.attributes.title || '').match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };
    var hanldeKeyDown = function (ev) {
        if (ev.keyCode === 13) {
            onChangeContent(__assign(__assign({}, content), { attributes: __assign(__assign({}, content.attributes), { title: title }) }));
        }
    };
    if (!getId()) {
        return (react_1.default.createElement("input", { value: title, onChange: handleChange, onKeyDown: hanldeKeyDown, placeholder: "Paste link of youtube video" }));
    }
    return (react_1.default.createElement("iframe", { src: "//www.youtube.com/embed/" + getId(), frameBorder: "0", allowFullScreen: true }));
};
exports.default = {
    title: 'Video',
    defaultLayout: { w: 40, h: 10 },
    defaultContent: {
        type: 'video',
        attributes: {},
    },
    render: Video,
};
//# sourceMappingURL=video.js.map