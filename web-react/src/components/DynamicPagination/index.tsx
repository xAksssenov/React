import { FC, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { ProductCard } from '../ProductCard';
import { IDataType } from './university';
import { PaginationContainer, Pagination, LoadingText, LoadingInView } from '../../global-styles';
import { AuthContext } from '../../services/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LIMIT_LIST_SCHOOL = 10;

export const DynamicPagination: FC = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<IDataType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth');
    }
  }, [isAuth, navigate]);

  const getUniversity = async (page: number, limit: number) => {
    try {
      setLoading(true);
      const offset = (page - 1) * limit;
      const response = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_LIST_SCHOOL}`,
      );

      setDataSource((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.log('Error fetching universities:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuth) {
      getUniversity(page, LIMIT_LIST_SCHOOL);
    }
  }, [page, isAuth]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView && !loading) {
      setPage((prev: number) => prev + 1);
    }
  }, [inView, loading]);

  if (!isAuth) return null;

  return (
    <PaginationContainer>
      <h1>Страница университетов</h1>
      <Pagination>
        {dataSource.map((university) => (
          <ProductCard data={university} key={university.name}></ProductCard>
        ))}
      </Pagination>
      {loading && <LoadingText>Загрузка...</LoadingText>}
      <LoadingInView ref={ref}>Дождитесь загрузки...</LoadingInView>
    </PaginationContainer>
  );
};
