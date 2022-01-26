import { GlobalStyle } from './styles/global.js';
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar.js';
import Home from './pages/About.js';
import Contact from './pages/Contact.js';
import ErrorPage from './pages/ErrorPage.js';
import * as S from './styles/styles';
import useChangeTheme from './hooks/useChangeTheme';
import Code from './pages/Code.js';

function App() {

  const { theme, changeTheme } = useChangeTheme();

  return (

    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar onChangeTheme={changeTheme} />
        <S.Box>
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
            <Route path={process.env.PUBLIC_URL + '/home'} element={<Home />} />
            <Route path={process.env.PUBLIC_URL + '/code'} element={<Code />} />
            <Route path={process.env.PUBLIC_URL + '/contact'} element={<Contact />} />
            <Route path={process.env.PUBLIC_URL + '*'} element={<ErrorPage />} />
          </Routes>
        </S.Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
