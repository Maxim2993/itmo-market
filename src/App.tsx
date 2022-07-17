import React from 'react';
import { ButtonGroup } from './UI-components/molecules/ButtonGroup';
import { LoginWindow } from './UI-components/molecules/LoginWindow'
import { PageComponent } from './UI-components/organisms/PageComponent'

function App() {
  return (
    <PageComponent>
      <ButtonGroup />
      <LoginWindow />
    </PageComponent>
  )
}

export default App;
