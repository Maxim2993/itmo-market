import React from 'react';
import { PageComponent } from '../UI-components/organisms/PageComponent'
import { ButtonGroup } from '../UI-components/molecules/ButtonGroup';
import { LogoutWindow } from '../UI-components/molecules/LogoutWindow';
import { RightSection } from '../UI-components/organisms/RightSection';

export const MainPage = () => {
    return (
        <PageComponent>
            <ButtonGroup />
            <RightSection>
                <LogoutWindow />
            </RightSection>
        </PageComponent>
    )
};