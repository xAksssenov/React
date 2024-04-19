import { FC } from 'react';
import { Card, CardText, CardTitle } from '../../global-styles';

interface DataType {
  country: string;
  name: string;
}

export const ProductCard: FC<{ data: DataType }> = ({ data }) => (
  <Card>
    <CardTitle>{data.name}</CardTitle>
    <CardText>{data.country}</CardText>
  </Card>
);
