import { Input, Component, OnInit } from '@angular/core';
import { FlightListService } from './flight-list.service';

@Component({
  selector: 'flight-select',
  template: `
    <mat-list>
      <flight-info [flight]="outbound">
      </flight-info>
        <mat-divider *ngIf="inbound"></mat-divider>
      <flight-info *ngIf="inbound" [flight]="inbound">
      </flight-info>
    </mat-list>
    <button (click)="toggleReturn()" mat-raised-button color="primary">Toggle Return</button>
  `
})
export class FlightSelectComponent implements OnInit  {
  @Input() departureIATA: string;
  @Input() destinationIATA: string;
  public outbound;
  public inbound;


  constructor(private flightList: FlightListService) {}

  public ngOnInit() {
    this.outbound = this.flightList.single(
      this.departureIATA, this.destinationIATA
    );
  }

  public toggleReturn() {
    this.inbound =
      this.inbound ? undefined : this.flightList.single(this.destinationIATA, this.departureIATA);
  }
}