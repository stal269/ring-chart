import { RingSectionItem } from './../../../ring-chart/src/lib/ring-chart.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  centerColor = '#FFFFFF';

  ring1$$ = {
    sections: [
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
    ],
    thickness: 8,
    diameter: 50
  };

  ring2$$ = {
    sections: [
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
    ],
    thickness: 15,
    diameter: 100
  };

  ring3$$ = {
    sections: [
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
    ],
    thickness: 30,
    diameter: 200
  };

  ring4$$ = {
    sections: [
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
    ],
    thickness: 12,
    diameter: 300
  };

  ring5$$ = {
    sections: [
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
    ],
    thickness: 25,
    diameter: 50
  };

  ring6$$ = {
    sections: [
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
    ],
    thickness: 50,
    diameter: 100
  };

  ring7$$ = {
    sections: [
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
    ],
    thickness: 100,
    diameter: 200
  };

  ring8$$ = {
    sections: [
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
    ],
    thickness: 150,
    diameter: 300
  };
}
