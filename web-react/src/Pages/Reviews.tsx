import { Review } from '../global-styles';

export const Reviews = () => {
  return (
    <>
      <h1>Отзывы магазина</h1>
      <Review>
        <p className="review__author">Иван Петров</p>
        <p className="review__comment">
          Отличные кроссовки! Быстрая доставка, отличное качество материалов и стильный дизайн. Рекомендую этот магазин!
        </p>
      </Review>
      <Review>
        <p className="review__author">Анна Сидорова</p>
        <p className="review__comment">
          Заказывала кроссовки для тренировок. Очень удобные, подошли по размеру. Сервис на высоте, оперативно отвечают
          на вопросы. В следующий раз обязательно снова здесь закажу.
        </p>
      </Review>
      <Review>
        <p className="review__author">Дмитрий Иванов</p>
        <p className="review__comment">
          Магазин имеет большой выбор кроссовок различных брендов. Понравилось, что есть подробные описания и фотографии
          товаров. Доставка была быстрой, кроссовки соответствуют ожиданиям.
        </p>
      </Review>
    </>
  );
};

export default Reviews;
