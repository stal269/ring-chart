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
      percentage: 0.15,
      color: 'red'
    },
    {
      percentage: 0.45,
      color: 'green'
    },
    {
      percentage: 0.4,
      color: 'blue'
    }
  ];

  thickness = 30;
  diameter = 600;
}
