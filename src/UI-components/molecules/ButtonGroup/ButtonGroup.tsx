import React from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../../app/redux/hooks'
import { Button } from '../../atoms/Button';

export const ButtonGroup = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    return (
        <Box component='section' sx={{
            marginTop: '98px',
            width: '520px',
            height: '534px',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'space-between',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            flexShrink: 0,
            alignSelf: 'start'
        }}>
            <Button content='market' disabled={!isAuth} sx={{ marginLeft: '90px' }} />
            <Button content='projects' disabled={!isAuth} />
            <Button content='user' disabled={!isAuth} />
        </Box>
    )
}
