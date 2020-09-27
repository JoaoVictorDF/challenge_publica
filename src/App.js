import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider as StyledProvider } from 'styled-components';

import Header from './components/header';
import GlobalStyle from './global/styles';
import Routes from './router';
import { theme } from './global/theme';

const App = () => {
  return (
    <BrowserRouter>
      <StyledProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <Routes />
      </StyledProvider>
    </BrowserRouter>
  );
}

export default App;
