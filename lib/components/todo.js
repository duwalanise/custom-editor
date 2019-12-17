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
var uuidv4_1 = require("uuidv4");
var CheckItem = function (_a) {
    var item = _a.item, handleKeyDown = _a.handleKeyDown, onChange = _a.onChange, onCheck = _a.onCheck;
    return (react_1.default.createElement("div", { className: "checkbox-wrapper" },
        react_1.default.createElement("input", { type: "checkbox", className: "sc-checkbox", checked: item.checked, onChange: onCheck(item) }),
        react_1.default.createElement("input", { type: "text", value: item.val, className: "sc-input-text", placeholder: "type check item", onKeyDown: handleKeyDown(item), onChange: onChange(item) })));
};
var Todo = function (_a) {
    var content = _a.content, isActive = _a.isActive, onChangeContent = _a.onChangeContent;
    var _b = react_1.useState(content.attributes.list || []), list = _b[0], setList = _b[1];
    var _c = react_1.useState({
        val: '',
        checked: false,
    }), newItem = _c[0], setNewItem = _c[1];
    var onChange = function (item) { return function (ev) {
        if (item.id) {
            setList(list.map(function (itm) { return (__assign(__assign({}, itm), { val: itm.id === item.id ? ev.target.value : itm.val })); }));
        }
        else {
            setNewItem(__assign(__assign({}, newItem), { val: ev.target.value }));
        }
    }; };
    var onCheck = function (item) { return function (ev) {
        if (item.id) {
            setList(list.map(function (itm) { return (__assign(__assign({}, itm), { checked: itm.id === item.id ? ev.target.checked : itm.checked })); }));
        }
        else {
            setNewItem(__assign(__assign({}, newItem), { checked: ev.target.checked }));
        }
    }; };
    var handleKeyDown = function (item) { return function (ev) {
        if (ev.keyCode === 13) {
            if (item.id) {
                ev.target.blur();
            }
            else {
                setList(list.concat({
                    id: uuidv4_1.uuid(),
                    val: newItem.val,
                    checked: newItem.checked,
                }));
                setNewItem({ val: '', checked: false });
            }
            onChangeContent(__assign(__assign({}, content), { attributes: __assign(__assign({}, content.attributes), { list: list }) }));
        }
    }; };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        list.map(function (item) { return (react_1.default.createElement(CheckItem, { key: item.id, item: item, handleKeyDown: handleKeyDown, onChange: onChange, onCheck: onCheck })); }),
        react_1.default.createElement(CheckItem, { item: newItem, handleKeyDown: handleKeyDown, onChange: onChange, onCheck: onCheck })));
};
exports.default = {
    title: 'Todo',
    defaultLayout: { w: 100, h: 3 },
    defaultContent: {
        type: 'todo',
        attributes: { title: 'This is a new Heading' },
    },
    render: Todo,
};
//# sourceMappingURL=todo.js.map