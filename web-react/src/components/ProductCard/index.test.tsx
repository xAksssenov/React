import { render, screen } from '@testing-library/react';
import { ProductCard } from '../ProductCard';

test('ProductCard renders with correct data', () => {
  const testData = {
    country: 'TestCountry',
    name: 'TestName',
  };

  render(<ProductCard data={testData} />);

  expect(screen.getByText(testData.name)).toBeInTheDocument();
  expect(screen.getByText(testData.country)).toBeInTheDocument();
});
