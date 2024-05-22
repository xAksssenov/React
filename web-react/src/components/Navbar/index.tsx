import { useNavigate } from 'react-router-dom';
import { NavButton, NavLink, NavbarWrapper } from '../../global-styles';
import { CONTACTS_ROUTE, HOME_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE } from '../../routes/configs';
import { useContext } from 'react';
import { AuthContext } from '../../services/AuthProvider';

interface NavbarProps {
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
    navigate('/auth');
  };

  return (
    <NavbarWrapper>
      <NavLink to={HOME_ROUTE}>Главная</NavLink>
      <NavLink to={PRODUCTS_ROUTE}>Товары</NavLink>
      <NavLink to={REVIEWS_ROUTE}>Отзывы</NavLink>
      <NavLink to={CONTACTS_ROUTE}>Контакты</NavLink>
      <NavButton onClick={toggleTheme}>Сменить тему</NavButton>
      <NavButton onClick={isAuth ? handleLogout : () => navigate('/auth')}>{isAuth ? 'Выйти' : 'Войти'}</NavButton>
    </NavbarWrapper>
  );
};

export default Navbar;
