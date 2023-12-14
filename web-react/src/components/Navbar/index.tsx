import { Link } from 'react-router-dom';

interface NavbarProps {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth, setIsAuth }) => {
    const click = () => {
        setIsAuth(!isAuth)
    }

    return (
        <div className="navbar">
            <Link to="/">Главная</Link>
            <Link to="/products">Товары</Link>
            <Link to="/reviews">Отзывы</Link>
            <Link to="/contacts">Контакты</Link>
            <button onClick={click}>{isAuth ? 'Выйти' : 'Войти'}</button>
        </div>
    )
}

export default Navbar;