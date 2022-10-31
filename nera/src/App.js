import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Globals.styles';
import NavBar from './components/layout/nav/NavBar';
import HeroSection from './components/section/hero-section/HeroSection'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 6rem;
  position: relative;
  @media screen and (max-width: 890px){
    padding: 0 3rem;
  }
`;

const LightTheme = {
  background: 'white',
  fontColor: 'black',
};

const DarkTheme = {
  background: 'black',
  fontColor: 'white',
};

function App() {
  const [theme, setTheme] = React.useState('dark');

  function toggleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Container>
        <GlobalStyles />
        <NavBar theme={theme} toggleTheme={toggleTheme}/>
        <HeroSection theme={theme}/>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
