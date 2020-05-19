import { RingSectionItem } from './../../../ring-chart/src/lib/ring-chart.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  centerColor = '#18191a';

  ring1$$ = {
    sections: [
      {
        percentage: 1,
        color: '#4894e0'
      }
    ],
    thickness: 8,
    diameter: 50
  };

  ring2$$ = {
    sections: [
      {
        percentage: 0.7,
        color: '#53d463'
      },
      {
        percentage: 0.3,
        color: '#323971'
      }
    ],
    thickness: 15,
    diameter: 100
  };

  ring3$$ = {
    sections: [
      {
        percentage: 0.25,
        color: '#92983c'
      },
      {
        percentage: 0.45,
        color: '#5cb750'
      },
      {
        percentage: 0.3,
        color: '#c16b42'
      }
    ],
    thickness: 30,
    diameter: 200
  };

  ring4$$ = {
    sections: [
      {
        percentage: 0.1,
        color: '#c508dc'
      },
      {
        percentage: 0.2,
        color: '#a7c9c0'
      },
      {
        percentage: 0.3,
        color: '#05ec17'
      },
      {
        percentage: 0.4,
        color: '#c8ea5e'
      }
    ],
    thickness: 12,
    diameter: 300
  };

  ring5$$ = {
    sections: [
      {
        percentage: 1,
        color: '#4894e0'
      }
    ],
    thickness: 25,
    diameter: 50
  };

  ring6$$ = {
    sections: [
      {
        percentage: 0.7,
        color: '#53d463'
      },
      {
        percentage: 0.3,
        color: '#323971'
      }
    ],
    thickness: 50,
    diameter: 100
  };

  ring7$$ = {
    sections: [
      {
        percentage: 0.25,
        color: '#92983c'
      },
      {
        percentage: 0.45,
        color: '#5cb750'
      },
      {
        percentage: 0.3,
        color: '#c16b42'
      }
    ],
    thickness: 100,
    diameter: 200
  };

  ring8$$ = {
    sections: [
      {
        percentage: 0.1,
        color: '#c508dc'
      },
      {
        percentage: 0.2,
        color: '#a7c9c0'
      },
      {
        percentage: 0.3,
        color: '#05ec17'
      },
      {
        percentage: 0.4,
        color: '#c8ea5e'
      }
    ],
    thickness: 150,
    diameter: 300
  };
}
