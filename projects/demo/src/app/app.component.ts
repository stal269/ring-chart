import { RingSectionItem } from './../../../ring-chart/src/lib/ring-chart.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sections: RingSectionItem[] = [
    {
      percentage: 0.8,
      color: 'red'
    },
    {
      percentage: 0.1,
      color: 'green'
    },
    {
      percentage: 0.1,
      color: 'blue'
    }
  ];

  centerColor = '#FFFFFF';
  thickness = 20;
  diameter = 700;
}
