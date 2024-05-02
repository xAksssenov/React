import { render, screen, waitFor } from '@testing-library/react';
import { DynamicPagination } from './index';
import 'intersection-observer';

describe('DynamicPagination component', () => {
  it('renders loading text initially', () => {
    render(<DynamicPagination />);
    expect(screen.getByText('Загрузка...')).toBeInTheDocument();
  });

  it('fetches universities data and renders cards', async () => {
    render(<DynamicPagination />);
    await waitFor(() => expect(screen.getByText('Cтраница университетов')).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument());
    expect(screen.getByText('Дождитеcь загрузки...')).toBeInTheDocument();
  });
});
