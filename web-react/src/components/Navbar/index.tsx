import { Link } from 'react-router-dom';
import { CONTACTS_ROUTE, HOME_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE } from '../../routes/configs';

interface NavbarProps {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth, setIsAuth }) => {
    const click = () => {
        setIsAuth((prev) => !prev)
    }

    return (
        <div className="navbar">
            <Link to={HOME_ROUTE}>Главная</Link>
            <Link to={PRODUCTS_ROUTE}>Товары</Link>
            <Link to={REVIEWS_ROUTE}>Отзывы</Link>
            <Link to={CONTACTS_ROUTE}>Контакты</Link>
            <button onClick={click}>{isAuth ? 'Выйти' : 'Войти'}</button>
        </div>
    )
}

export default Navbar;