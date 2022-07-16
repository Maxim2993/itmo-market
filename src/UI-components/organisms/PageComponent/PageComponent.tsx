import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { theme } from '../../../theme';
import { styled } from '@mui/material/styles';

import backgroundImage from '../../../assets/Background.png';

type Props = {
    children?: React.ReactNode;
};

export const PageComponent: FC<Props> = ({ children }) => {
    const Main = styled('main')({ display: 'flex', flex: '1 0 auto' });

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: theme.palette.background.default,
                backgroundImage: `url(${backgroundImage})`,
                backgroundBlendMode: 'multiply',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                padding: `${theme.spacing(8)} ${theme.spacing(10)}`
            }}
        >
            <Main>{children}</Main>
        </Box>
    );
};