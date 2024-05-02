import { IDataType } from './university';

describe('interface', () => {
  it('should have the correct properties', () => {
    const university: IDataType = {
      country: 'United Kingdom',
      name: 'West Herts College'
    };

    expect(university.country).toBe('United Kingdom');
    expect(university.name).toBe('West Herts College');
  });
});
