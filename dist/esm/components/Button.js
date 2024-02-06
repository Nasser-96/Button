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
import { ColorsEnum, SizesEnum, VariantsEnum } from './enums';
import React from 'react';
export const Button = (_a) => {
    var _b;
    var { color = ColorsEnum.Primary, size = SizesEnum.Medium, variant = VariantsEnum.Filled, icon = null } = _a, props = __rest(_a, ["color", "size", "variant", "icon"]);
    const getSizes = () => {
        switch (size) {
            case SizesEnum.Small:
                return 'px-4 h-9 text-xs';
            case SizesEnum.Medium:
                return 'px-6 h-10 text-sm';
            case SizesEnum.Large:
                return 'px-8 h-12 text-base';
            default:
                return 'px-6 h-10 text-sm';
        }
    };
    const getVariantWithColor = () => {
        switch (variant) {
            case VariantsEnum.Filled:
                return `text-white bg-${getColorClasses()} hover:bg-${getColorClasses()}-600 focus:ring-2 focus:ring-bg-${getColorClasses()}-600`;
            case VariantsEnum.Outline:
                return `bg-transparent border border-${getColorClasses()} text-${getColorClasses()} hover:bg-${getColorClasses()} hover:text-white focus:bg-${getColorClasses()} focus:border-0 focus:text-white`;
            case VariantsEnum.Link:
                return `bg-transparent hover:text-${getColorClasses()}-600 text-${getColorClasses()}`;
            case VariantsEnum.Muted:
                return `text-${getColorClasses()} dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 hover:bg-opacity-20 bg-opacity-10 focus:ring-2 bg-muted`;
            case VariantsEnum.White:
                return `text-${getColorClasses()} bg-white hover:bg-${getColorClasses()} hover:text-white`;
            default:
                return `bg-transparent hover:text-${getColorClasses()}-600 text-${getColorClasses()}`;
        }
    };
    const getColorClasses = () => {
        switch (color) {
            case ColorsEnum.Success:
                return 'success';
            case ColorsEnum.Danger:
                return 'danger';
            case ColorsEnum.Warning:
                return 'warning';
            case ColorsEnum.Accent:
                return 'accent';
            case ColorsEnum.Primary:
                return 'primary';
            case ColorsEnum.Secondary:
                return 'secondary';
            case ColorsEnum.Muted:
                return 'muted';
            case ColorsEnum.White:
                return 'white';
            default:
                return color;
        }
    };
    return (React.createElement("button", Object.assign({}, props, { className: `inline-flex items-center ${getSizes()} ${getVariantWithColor()} rounded-btn-custom justify-center disabled:cursor-not-allowed disabled:opacity-40 ${(_b = props.className) !== null && _b !== void 0 ? _b : ''}` }), icon ? (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "inline-block" }, icon),
        React.createElement("span", { className: "mr-2 inline-block" }, props.children))) : (React.createElement("span", null, props.children))));
};
//# sourceMappingURL=Button.js.map