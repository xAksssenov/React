import styled from 'styled-components';
import { Home } from '../global-styles';

interface StyledProps {
  ImgWidth?: string;
  src?: string;
  alt?: string;
}

const ImgHome = styled.img<StyledProps>`
  width: ${({ ImgWidth }) => (ImgWidth ? ImgWidth : '100px')};
`;

export const HomePage = () => {
  return (
    <>
      <h1>Главная страница магазина</h1>
      <Home>
        <p>
          Добро пожаловать в Street Bear - магазин кроссовок, где мы предлагаем лучшие модели для настоящих любителей
          уличной моды! Наша коллекция включает в себя самые популярные бренды и модели, которые позволяют выразить свой
          стиль и индивидуальность. Подписывайтесь на наш профиль, чтобы быть в курсе новых поступлений и представлений
          в мире кроссовок. Не упустите шанс сделать свой образ уникальным с помощью Street Bear!
        </p>
        <ImgHome src="/sneakers.png" ImgWidth="500px" alt="" />
        <p className="home__p">
          На осень 2018 года сеть насчитывает 34 магазина Street Bear, пять магазинов Street Bear KIDS и два магазина
          Street Bear SPORT, расположенные в Москве, Санкт-Петербурге, Екатеринбурге, Воронеже, Краснодаре,
          Ростове-на-Дону, Сочи, Нижнем Новгороде, Омске, Новосибирске, Перми, Уфе, а до конца 2018 года компания
          планирует открыть еще 10 магазинов по России.
        </p>
      </Home>
    </>
  );
};

export default HomePage;
