"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var paragraph_1 = __importDefault(require("./components/paragraph"));
var heading_1 = __importDefault(require("./components/heading"));
var video_1 = __importDefault(require("./components/video"));
// add custom created components over here
exports.CustomComponents = {
    paragraph: paragraph_1.default,
    heading: heading_1.default,
    video: video_1.default,
};
exports.default = (function (type) {
    return exports.CustomComponents[type];
});
//# sourceMappingURL=toolbox.js.map