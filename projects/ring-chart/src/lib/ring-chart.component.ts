import { Component, SimpleChanges, Input, OnChanges } from '@angular/core';
import { RingSemiSectionItem, RingSectionItem } from './ring-chart.model';

@Component({
  selector: 'lib-ring-chart',
  templateUrl: './ring-chart.component.html',
  styleUrls: ['./ring-chart.component.scss']
})
export class RingChartComponent implements OnChanges {

  private static readonly NUM_OF_DEGREES_RING = 360;
  private static readonly INITIAL_OFFSET_DEGREES_SEMI = 180;

  @Input() sections: RingSectionItem[] = [];
  @Input() diameter: number;
  @Input() thickness: number;

  leftSemiRingSections$$: RingSemiSectionItem[] = [];
  rightSemiRingSections$$: RingSemiSectionItem[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.firstChange) {
      this.calculateSections();
    }
  }

  private calculateSections(): void {
    let rightSemiRingTotalPercents = 0;
    let leftSemiRingTotalPercents = 0;

    this.sections.forEach((section, index) => {
      if (rightSemiRingTotalPercents < 0.5) {
        if (rightSemiRingTotalPercents + section.percentage > 0.5) {
          const leftSemiPercentRemainder = rightSemiRingTotalPercents + section.percentage - 0.5;

          this.leftSemiRingSections$$.push({
            index,
            rotation: this.getSemiRotation(leftSemiRingTotalPercents),
            color: section.color
          });

          leftSemiRingTotalPercents += leftSemiPercentRemainder;
        }

        this.rightSemiRingSections$$.push({
          index,
          rotation: this.getSemiRotation(rightSemiRingTotalPercents),
          color: section.color
        });

        rightSemiRingTotalPercents += section.percentage;
      } else {
        this.leftSemiRingSections$$.push({
          index,
          rotation: this.getSemiRotation(leftSemiRingTotalPercents),
          color: section.color
        });

        leftSemiRingTotalPercents += section.percentage;
      }
    });
  }

  private getSemiRotation(percentage: number): number {
    return (RingChartComponent.INITIAL_OFFSET_DEGREES_SEMI + (percentage * RingChartComponent.NUM_OF_DEGREES_RING)) %
      RingChartComponent.NUM_OF_DEGREES_RING;
  }

}
