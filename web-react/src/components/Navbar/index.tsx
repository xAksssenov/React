import { NavButton, NavLink, NavbarWrapper } from '../../global-styles'
import { CONTACTS_ROUTE, HOME_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE } from '../../routes/configs'

interface NavbarProps {
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  toggleTheme: () => void
}

const Navbar: React.FC<NavbarProps> = ({ isAuth, setIsAuth, toggleTheme }) => {
  const click = () => {
    setIsAuth((prev) => !prev);
  };

  return (
    <NavbarWrapper>
      <NavLink to={HOME_ROUTE}>Главная</NavLink>
      <NavLink to={PRODUCTS_ROUTE}>Товары</NavLink>
      <NavLink to={REVIEWS_ROUTE}>Отзывы</NavLink>
      <NavLink to={CONTACTS_ROUTE}>Контакты</NavLink>
      <NavButton onClick={toggleTheme}>Сменить тему</NavButton>
      <NavButton onClick={click}>{isAuth ? 'Выйти' : 'Войти'}</NavButton>
    </NavbarWrapper>
  );
};

export default Navbar;
