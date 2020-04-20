import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RingChartModule } from 'projects/ring-chart/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RingChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
