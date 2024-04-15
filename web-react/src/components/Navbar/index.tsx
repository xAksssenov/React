import { Link } from 'react-router-dom';
import { CONTACTS_ROUTE, HOME_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE } from '../../routes/configs';
import styled from 'styled-components';

interface NavbarProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
}

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100vw;
  padding: 1rem;
  background-color: var(--theme-text);
  color: var(--theme);
  transition:
    background-color 0.25s,
    color 0.25s;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  background-color: var(--theme-text);
  color: var(--theme);
  transition:
    background-color 0.25s,
    color 0.25s,
    transform 0.3s ease;
  font-weight: bold;
`;

const NavButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--theme);
  color: var(--theme-text);
  transition:
    background-color 0.25s,
    color 0.25s;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.buttonBorderHover};
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
    color: ${({ theme }) => theme.buttonTextHover};
  }
`;

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
