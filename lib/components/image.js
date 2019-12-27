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
var Image = function (_a) {
    var content = _a.content, isActive = _a.isActive, onChangeContent = _a.onChangeContent;
    var image = content.attributes.image;
    var onSuccess = function (newImage) {
        onChangeContent(__assign(__assign({}, content), { attributes: __assign(__assign({}, content.attributes), { image: {
                    url: newImage.url,
                    filename: newImage.filename,
                    mimetype: newImage.mimetype,
                } }) }));
    };
    if (image) {
        return react_1.default.createElement("img", { className: "file-image-tag", src: image.url, alt: "" });
    }
    return (react_1.default.createElement(react_filepicker_1.default, { apikey: process.env.REACT_APP_FILESTACK_API_KEY || apiKey, onSuccess: onSuccess, buttonText: "Upload", buttonClass: "upload-file-button " + (!!image && 'hide-button'), options: {
            mimetypes: ['image/*'],
        } }));
};
exports.default = {
    title: 'Image',
    defaultLayout: { w: 20, h: 4 },
    defaultContent: {
        type: 'Image',
        attributes: {},
    },
    render: Image,
};
//# sourceMappingURL=image.js.map