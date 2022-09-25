import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FlightListService } from './flight-list.service';

describe('FlightListService Integration tests', () => {
  let service: FlightListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FlightListService]
    });

    service = TestBed.get(FlightListService);
  });

  it('Should return all the routes from API', done => {
    service.listAPI().subscribe(res => {
      expect(res).toMatchSnapshot();
      done();
    });
  });
});