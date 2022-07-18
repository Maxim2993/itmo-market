import React from 'react';
import { PageComponent } from '../UI-components/organisms/PageComponent'
import { ButtonGroup } from '../UI-components/molecules/ButtonGroup';
import { LoginWindow } from '../UI-components/molecules/LoginWindow';
import { RightSection } from '../UI-components/organisms/RightSection';

export const LoginPage = () => {
    return (
        <PageComponent>
            <ButtonGroup />
            <RightSection>
                <LoginWindow />
            </RightSection>
        </PageComponent>
    )
};
