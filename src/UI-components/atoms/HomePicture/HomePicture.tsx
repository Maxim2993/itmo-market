import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import home from './Home.png';
import rectangle from './Rectangle.png';

export const HomePicture = () => {
    return (
        <Box
            sx={{
                height: '50px',
                width: '50px',
                backgroundRepeat: 'no-repeat',
                background: `url(${rectangle}) bottom no-repeat, url(${home})`,
                backgroundSize: '50px, 50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                alignItems: 'center',
            }}
        >
            <Typography
                component='p'
                variant='btnContent'
            >
                HOME
            </Typography >
        </Box>
    );
};