import { render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

test('renders the application without crashing', () => {
  const rootElement = document.createElement('div');
  rootElement.id = 'root';
  document.body.appendChild(rootElement);

  act(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { container: rootElement }
    );
  });
});
