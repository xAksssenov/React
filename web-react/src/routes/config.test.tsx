import { HOME_ROUTE, CONTACTS_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE } from './configs';

describe('Route Constants', () => {
  it('should have the correct values', () => {
    expect(HOME_ROUTE).toBe('/');
    expect(CONTACTS_ROUTE).toBe('/contacts');
    expect(PRODUCTS_ROUTE).toBe('/products');
    expect(REVIEWS_ROUTE).toBe('/reviews');
  });
});
