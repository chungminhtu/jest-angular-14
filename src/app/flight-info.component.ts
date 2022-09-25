import { Input, Component } from '@angular/core';

@Component({
  selector: 'flight-info',
  template: `
<mat-list-item>
  <div class="fare">
    <span class="airport">{{ flight.departure }}</span>
    <small>{{ flight.departureDatetime | date:'short' }}</small>
  </div>
  <div class="fare"> 
    <span class="airport">{{ flight.destination }}</span>
    <small>{{ flight.arrivalDatetime | date:'short' }}</small>
  </div>
</mat-list-item>
  `,
  styleUrls: [ './flight-info.component.css' ]
})
export class FlightInfoComponent  {
  @Input() flight;
}
