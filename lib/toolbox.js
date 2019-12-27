"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var paragraph_1 = __importDefault(require("./components/paragraph"));
var heading_1 = __importDefault(require("./components/heading"));
var video_1 = __importDefault(require("./components/video"));
var todo_1 = __importDefault(require("./components/todo"));
var files_1 = __importDefault(require("./components/files"));
var image_1 = __importDefault(require("./components/image"));
var editor_1 = __importDefault(require("./components/editor"));
// add custom created components over here
exports.CustomComponents = {
    Paragraph: paragraph_1.default,
    Heading: heading_1.default,
    Video: video_1.default,
    Todo: todo_1.default,
    FroalaEditor: editor_1.default,
    File: files_1.default,
    Image: image_1.default,
};
exports.default = (function (type) {
    return exports.CustomComponents[type];
});
//# sourceMappingURL=toolbox.js.map