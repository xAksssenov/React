import { useState } from 'react';
import './App.css'
import MainRouter from './routes/MainRouter';
import Navbar from './components/Navbar';

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <MainRouter isAuth={isAuth} />
    </>
  )
}

export default App;
