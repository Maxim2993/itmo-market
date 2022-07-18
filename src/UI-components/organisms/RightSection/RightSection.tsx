import React from 'react';
import Box from '@mui/material/Box';

import { Title } from '../../molecules/Title';

export const RightSection = ({ children }: any) => {
    return (
        <Box
            component='section'
            sx={{
                height: '100%',
                display: 'flex',
                alignSelf: 'center',
                position: 'relative'
            }}
        >
            <Title />
            {children}
        </Box>
    )
}