import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FlightInfoComponent } from './flight-info.component';
import { FlightListService } from './flight-list.service';
import { FlightSelectComponent } from './flight-select.component';
import { MyAppComponent } from './my-app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    MatListModule,
    NoopAnimationsModule,
    MatButtonModule,
    HttpClientModule
   ],
  declarations: [ AppComponent, HelloComponent, FlightInfoComponent, FlightSelectComponent, MyAppComponent],
  providers: [FlightListService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
