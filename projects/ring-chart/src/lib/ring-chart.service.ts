import { Injectable } from '@angular/core';
import { RingSectionItem, RingSectionsPartition } from './ring-chart.model';

@Injectable({
  providedIn: 'root'
})
export class RingChartService {

  private static readonly NUM_OF_DEGREES_RING = 360;
  private static readonly INITIAL_OFFSET_DEGREES_SEMI = 180;

  constructor() { }

  public getRingSectionsPartition(sections: RingSectionItem[]): RingSectionsPartition {
    let rightSemiRingTotalPercents = 0;
    let leftSemiRingTotalPercents = 0;
    const leftSections = [];
    const rightSections = [];

    sections.forEach((section, index) => {
      if (rightSemiRingTotalPercents < 0.5) {
        if (rightSemiRingTotalPercents + section.percentage > 0.5) {
          const leftSemiPercentRemainder = rightSemiRingTotalPercents + section.percentage - 0.5;

          leftSections.push({
            index,
            rotation: this.getSemiRotation(leftSemiRingTotalPercents),
            color: section.color
          });

          leftSemiRingTotalPercents += leftSemiPercentRemainder;
        }

        rightSections.push({
          index,
          rotation: this.getSemiRotation(rightSemiRingTotalPercents),
          color: section.color
        });

        rightSemiRingTotalPercents += section.percentage;
      } else {
        leftSections.push({
          index,
          rotation: this.getSemiRotation(leftSemiRingTotalPercents),
          color: section.color
        });

        leftSemiRingTotalPercents += section.percentage;
      }
    });

    return { leftSections, rightSections };
  }

  private getSemiRotation(percentage: number): number {
    return (RingChartService.INITIAL_OFFSET_DEGREES_SEMI + (percentage * RingChartService.NUM_OF_DEGREES_RING)) %
    RingChartService.NUM_OF_DEGREES_RING;
  }

}
