import React from 'react';
import Typography from '@mui/material/Typography';

import { theme } from '../../../theme';

export const Title = () => {
    return (
        <Typography
            component='h1'
            variant='title'
            sx={{
                position: 'absolute',
                top: theme.spacing(8),
                color: theme.palette.common.black
            }}
        >
            {'Welcome to the ...'}
        </Typography >
    )
}