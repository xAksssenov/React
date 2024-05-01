import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { ProductCard } from '../ProductCard';
import { IDataType } from './university';
import { PaginationContainer, Pagination, LoadingText, LoadingInView } from '../../global-styles';

const LIMIT_LIST_SCHOOL = 10;

export const DynamicPagination: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<IDataType[]>([]);
  const [loading, setLoading] = useState(false);

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
    getUniversity(page, LIMIT_LIST_SCHOOL);
  }, [page]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView && !loading) {
      setPage((prev: number) => prev + 1);
    }
  }, [inView, loading]);

  return (
    <PaginationContainer>
      <h1>Cтраница университетов</h1>
      <Pagination>
        {dataSource.map((university) => (
          <ProductCard data={university} key={university.name}></ProductCard>
        ))}
      </Pagination>
      {loading && <LoadingText>Загрузка...</LoadingText>}
      <LoadingInView ref={ref}>Дождитеcь загрузки...</LoadingInView>
    </PaginationContainer>
  );
};
