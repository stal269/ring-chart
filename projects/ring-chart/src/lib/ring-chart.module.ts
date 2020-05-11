import { NgModule } from '@angular/core';
import { RingChartComponent } from './ring-chart.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [RingChartComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [RingChartComponent]
})
export class RingChartModule { }
