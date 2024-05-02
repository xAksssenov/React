import { render, screen } from '@testing-library/react';
import { ContactsPage } from './Contacts';

describe('ContactsPage component', () => {
  it('renders contact information', () => {
    render(<ContactsPage />);

    expect(screen.getByText('Контактная страница')).toBeInTheDocument();
    expect(screen.getByText('Адрес: Большая Семеновская')).toBeInTheDocument();
    expect(screen.getByText('Телефон: + 7 (920) 600-02-20')).toBeInTheDocument();
    expect(screen.getByText('Почта: aks.kirill32@gmail.com')).toBeInTheDocument();
  });
});
