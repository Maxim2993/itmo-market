import React from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { theme } from '../../../theme';
import { Section } from './LoginWindow.styles';
import { login } from '../../../app/redux/slices/auth/authSlice';

export const LoginWindow = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
            save: '',
        },

        onSubmit: values => {
            dispatch(login({
                email: values.email,
                isAuth: true
            }));
            navigate('../main');
        },
    });

    return (
        <Section>
            <Typography variant="h2" align="left">
                Sign In
            </Typography>
            <Box component="form" sx={{ mt: 3, display: 'flex', flexDirection: 'column' }} onSubmit={formik.handleSubmit} >
                <TextField
                    id='email'
                    name='email'
                    label='Email*'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <TextField
                    sx={{ mt: 1.75 }}
                    id='password'
                    name='password'
                    label='Password*'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <Link href="#" underline="none">
                    <Typography variant="body2" color={theme.palette.text.primary} sx={{ mt: 1.75 }}>
                        Forgot password?
                    </Typography>
                </Link>
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, width: '160px', height: '48px' }} >
                    <Typography variant="body1" sx={{ textTransform: 'none' }} >
                        Sign In
                    </Typography>
                </Button>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    onChange={formik.handleChange}
                    value={formik.values.save}
                    id='save'
                    name='save'
                    label={
                        <Typography variant="body2" color={theme.palette.text.secondary} >
                            Remember password
                        </Typography>}
                    sx={{ mt: 1 }}
                />
            </Box>
        </Section>
    );
};