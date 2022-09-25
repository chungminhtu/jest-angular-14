import { FlightListService } from './flight-list.service';

describe('FlightListService', () => {
  let service;
  const http = {
    get: jest.fn()
  };

  beforeEach(() => {
    service = new FlightListService(http as any);
  });

  it('Should return a single fligth from DUB to MAD', () => {
    expect(service.single('DUB', 'MAD')).toMatchSnapshot();
  });

  it('Should return all the routes from API', () => {
    expect(service.listAPI()).toMatchSnapshot();
  });
});