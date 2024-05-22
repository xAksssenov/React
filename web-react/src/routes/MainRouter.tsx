import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Contacts from '../Pages/Contacts';
import Reviews from '../Pages/Reviews';
import LoginForm from '../Pages/LoginForm';
import { HOME_ROUTE, CONTACTS_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE, AUTH_ROUTE } from './configs';

interface MainRouterProps {
  isAuth: boolean;
}

const MainRouter: React.FC<MainRouterProps> = ({ isAuth }) => {
  const basedPath: RouteObject[] = [
    { path: HOME_ROUTE, element: <Home /> },
    { path: CONTACTS_ROUTE, element: <Contacts /> },
    { path: REVIEWS_ROUTE, element: <Reviews /> },
    { path: AUTH_ROUTE, element: <LoginForm /> },
    { path: '*', element: <Navigate to="/" /> },
  ];

  const authPath: RouteObject[] = [
    { path: PRODUCTS_ROUTE, element: isAuth ? <Products /> : <Navigate to={HOME_ROUTE} /> },
  ];

  const resultPaths: RouteObject[] = isAuth ? [...basedPath, ...authPath] : basedPath;

  return useRoutes(resultPaths);
};

export default MainRouter;
