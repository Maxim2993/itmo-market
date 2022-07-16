import React, { FC } from 'react';
import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';
import { ButtonStyled } from './Button.styles';
import { ButtonPropTypes } from './Button.types';

export const Button: FC<ButtonPropTypes & ButtonUnstyledProps> = ({ ...props }) => {

    return <ButtonStyled {...props}>

    </ButtonStyled >
};