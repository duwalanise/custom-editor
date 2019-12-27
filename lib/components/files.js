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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_filepicker_1 = __importDefault(require("react-filepicker"));
var apiKey = 'AKrh6bR0mSMemDJxv7bXmz';
var File = function (_a) {
    var content = _a.content, isActive = _a.isActive, onChangeContent = _a.onChangeContent;
    var file = content.attributes.file;
    var onSuccess = function (newFile) {
        onChangeContent(__assign(__assign({}, content), { attributes: __assign(__assign({}, content.attributes), { file: {
                    url: newFile.url,
                    filename: newFile.filename,
                    mimetype: newFile.mimetype,
                } }) }));
    };
    if (!file) {
        return (react_1.default.createElement(react_filepicker_1.default, { apikey: process.env.REACT_APP_FILESTACK_API_KEY || apiKey, onSuccess: onSuccess, buttonText: "Upload", buttonClass: "upload-file-button" }));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("a", { href: file.url }, file.filename)));
};
exports.default = {
    title: 'File',
    defaultLayout: { w: 20, h: 4 },
    defaultContent: {
        type: 'File',
        attributes: {},
    },
    render: File,
};
//# sourceMappingURL=files.js.map