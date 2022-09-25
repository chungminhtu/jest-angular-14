import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FlightInfoComponent } from './flight-info.component';
import { MatListModule } from '@angular/material/list';

describe('FlightInfoComponent', () => {
  let component: FlightInfoComponent;
  let fixture: ComponentFixture<FlightInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [FlightInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInfoComponent);
    component = fixture.componentInstance;
  });

  it('Should display a flight', () => {
    component.flight = {};
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('Should display a flight from DUB to WRO', () => {
    component.flight = {
      flightNumber: 'FR153',
      departure: 'DUB',
      destination: 'WRO',
      departureDatetime: '2018-06-15T17:25:00',
      arrivalDatetime: '2018-06-15T21:00:00'
    };
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});