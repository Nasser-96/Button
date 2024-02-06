import { ColorsEnum, SizesEnum, VariantsEnum } from './enums';
import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: SizesEnum;
    variant?: VariantsEnum;
    color?: ColorsEnum;
    icon?: JSX.Element;
}
export declare const Button: React.FC<ButtonProps>;
