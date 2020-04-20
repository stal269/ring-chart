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
      percentage: 0.5,
      color: '#FF0000'
    },
    {
      percentage: 0.5,
      color: '#800000'
    }
  ];
}
