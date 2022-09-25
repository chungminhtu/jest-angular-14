import { Input, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <flight-select departureIATA="DUB" destinationIATA="MAD">
    </flight-select>
  `
})
export class MyAppComponent  {}
