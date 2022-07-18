import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { theme } from '../../../theme';
import { HomePicture } from '../../atoms/HomePicture';
import { ArrowIcon } from '../../../assets/ArrowIcon';

import { logout } from '../../../app/redux/slices/auth/authSlice';
import { useAppDispatch } from '../../../app/redux/hooks';

export const LogoutWindow = () => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(logout());
    }
    return (
        <Box
            component='section'
            sx={{
                width: '302px',
                alignSelf: 'center',
                position: 'relative',
                display: 'flex',

            }}
        >
            <HomePicture />
            <Box sx={{
                display: 'flex',
                ml: theme.spacing(3),
                flexDirection: 'column',
                alignItems: 'center'

            }}>
                <Typography
                    variant='h2'
                    sx={{ color: '#0298A9', mb: theme.spacing(5) }}
                >
                    User/1
                </Typography >
                <Button
                    onClick={handleClick}
                    variant="text"
                    sx={{ textTransform: 'none' }}
                    startIcon={<ArrowIcon />}>
                    <Typography
                        variant='textlink2'
                        sx={{ ml: '-4px' }}
                    >
                        Logout
                    </Typography >
                </Button>
            </Box>
        </Box>
    );
};