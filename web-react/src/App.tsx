import { useEffect, useState } from 'react';
import './App.css'
import MainRouter from './routes/MainRouter';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global-styles.tsx'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <>
      <ThemeProvider theme={{ mode: theme }}>
        <GlobalStyle />
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} toggleTheme={toggleTheme} />
        <MainRouter isAuth={isAuth} />
      </ThemeProvider>
    </>
  )
}

export default App;
