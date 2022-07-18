import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';
import { css } from '@mui/system';
import { ButtonPropTypes } from './Button.types';
import { styled } from '../../../theme/styled';

import cursor from '../../../assets/Vector.png';

export const ButtonStyled = styled('button') <ButtonUnstyledProps & ButtonPropTypes>`
border: none;
width: 250px;
height: 250px;
// cursor: pointer;
border-radius: 20px; 
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 18px;
letter-spacing: 0.15px;
text-transform: uppercase;
cursor: url(${cursor}), pointer;
color: ${(props) => props.theme.palette.common.white};

&:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.6);
};

&::after {
       
    transform: rotate(-45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    content: '${(props) => props.content}';
    
};
${(props) =>
        (props.content === 'market' && !props.disabled &&
            css`
                background: ${props.theme.palette.secondary.main};
            `) ||
        (props.content === 'market' && props.disabled &&
            css`
                background: ${props.theme.palette.secondary.disabled};
            `) ||
        (props.content === 'projects' && !props.disabled &&
            css`
                background: ${props.theme.palette.info.main};
            `) ||
        (props.content === 'projects' && props.disabled &&
            css`
                background: ${props.theme.palette.info.disabled};
            `) ||
        (props.content === 'user' && !props.disabled &&
            css`
                background: ${props.theme.palette.primary.main};
            `) ||
        (props.content === 'user' && props.disabled &&
            css`
                background: ${props.theme.palette.primary.disabled};
            `)
    }
`;
