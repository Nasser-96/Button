"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const enums_1 = require("./enums");
const react_1 = __importDefault(require("react"));
const Button = (_a) => {
    var _b;
    var { color = enums_1.ColorsEnum.Primary, size = enums_1.SizesEnum.Medium, variant = enums_1.VariantsEnum.Filled, icon = null } = _a, props = __rest(_a, ["color", "size", "variant", "icon"]);
    const getSizes = () => {
        switch (size) {
            case enums_1.SizesEnum.Small:
                return 'px-4 h-9 text-xs';
            case enums_1.SizesEnum.Medium:
                return 'px-6 h-10 text-sm';
            case enums_1.SizesEnum.Large:
                return 'px-8 h-12 text-base';
            default:
                return 'px-6 h-10 text-sm';
        }
    };
    const getVariantWithColor = () => {
        switch (variant) {
            case enums_1.VariantsEnum.Filled:
                return `text-white bg-${getColorClasses()} hover:bg-${getColorClasses()}-600 focus:ring-2 focus:ring-bg-${getColorClasses()}-600`;
            case enums_1.VariantsEnum.Outline:
                return `bg-transparent border border-${getColorClasses()} text-${getColorClasses()} hover:bg-${getColorClasses()} hover:text-white focus:bg-${getColorClasses()} focus:border-0 focus:text-white`;
            case enums_1.VariantsEnum.Link:
                return `bg-transparent hover:text-${getColorClasses()}-600 text-${getColorClasses()}`;
            case enums_1.VariantsEnum.Muted:
                return `text-${getColorClasses()} dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 hover:bg-opacity-20 bg-opacity-10 focus:ring-2 bg-muted`;
            case enums_1.VariantsEnum.White:
                return `text-${getColorClasses()} bg-white hover:bg-${getColorClasses()} hover:text-white`;
            default:
                return `bg-transparent hover:text-${getColorClasses()}-600 text-${getColorClasses()}`;
        }
    };
    const getColorClasses = () => {
        switch (color) {
            case enums_1.ColorsEnum.Success:
                return 'success';
            case enums_1.ColorsEnum.Danger:
                return 'danger';
            case enums_1.ColorsEnum.Warning:
                return 'warning';
            case enums_1.ColorsEnum.Accent:
                return 'accent';
            case enums_1.ColorsEnum.Primary:
                return 'primary';
            case enums_1.ColorsEnum.Secondary:
                return 'secondary';
            case enums_1.ColorsEnum.Muted:
                return 'muted';
            case enums_1.ColorsEnum.White:
                return 'white';
            default:
                return color;
        }
    };
    return (react_1.default.createElement("button", Object.assign({}, props, { className: `inline-flex items-center ${getSizes()} ${getVariantWithColor()} rounded-btn-custom justify-center disabled:cursor-not-allowed disabled:opacity-40 ${(_b = props.className) !== null && _b !== void 0 ? _b : ''}` }), icon ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { className: "inline-block" }, icon),
        react_1.default.createElement("span", { className: "mr-2 inline-block" }, props.children))) : (react_1.default.createElement("span", null, props.children))));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map