import React from 'react';
import { PageComponent } from '../UI-components/organisms/PageComponent'
import { ButtonGroup } from '../UI-components/molecules/ButtonGroup';
import { LoginWindow } from '../UI-components/molecules/LoginWindow';

export const LoginPage = () => {
    return (
        <PageComponent>
            <ButtonGroup />
            <LoginWindow />
        </PageComponent>
    )
};
