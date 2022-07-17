import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { theme } from '../../../theme';
import { Section } from './LoginWindow.styles';

export const LoginWindow = () => (
    <Section>
        <Typography variant="h2" align="left">
            Sign In
        </Typography>
        <Box component="form" sx={{ mt: 3, display: 'flex', flexDirection: 'column' }}>
            <TextField />
            <TextField sx={{ mt: 1.75 }} />
            <Link href="#" underline="none">
                <Typography variant="body2" color={theme.palette.text.primary} sx={{ mt: 1.75 }}>
                    Forgot password?
                </Typography>
            </Link>
            <Button variant="contained" color="primary" sx={{ mt: 3, width: '160px', height: '48px' }} >
                <Typography variant="body1" sx={{ textTransform: 'none' }} >
                    Sign In
                </Typography>
            </Button>
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                    <Typography variant="body2" color={theme.palette.text.secondary} >
                        Remember password
                    </Typography>}
                sx={{ mt: 1 }}
            />
        </Box>
    </Section>
);