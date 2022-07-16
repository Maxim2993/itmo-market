import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '../../atoms/Button';

export const ButtonGroup = () => {
    return (
        <Box component='section' sx={{
            position: 'relative',
        }}>
            <Button content='projects' sx={{ position: 'absolute', top: '127px' }} />
            <Button content='market' sx={{ position: 'absolute', left: '259.2px' }} />
            <Button content='user' sx={{ position: 'absolute', top: '319px', left: '194px' }} />
        </Box>
    )
}
