import { SxProps, Theme } from '@mui/material/styles';

export type ButtonPropTypes = {
    sx?: SxProps<Theme>;
    content: 'market' | 'projects' | 'user';
};