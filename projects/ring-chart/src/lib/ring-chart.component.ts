import { Component, SimpleChanges, Input, OnChanges } from '@angular/core';
import { RingSemiSectionItem, RingSectionItem, RingSectionsPartition } from './ring-chart.model';
import { RingChartService } from './ring-chart.service';

@Component({
  selector: 'lib-ring-chart',
  templateUrl: './ring-chart.component.html',
  styleUrls: ['./ring-chart.component.scss']
})
export class RingChartComponent implements OnChanges {

  @Input() sections: Array<RingSectionItem> = [];
  @Input() diameter: number;
  @Input() thickness: number;

  leftSections$$: RingSemiSectionItem[] = [];
  rightSections$$: RingSemiSectionItem[] = [];

  constructor(private readonly ringChartSrv: RingChartService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.firstChange) {
      this.validateThickness();
      this.validateSections();
      this.calculateSections();
    }
  }

  getStyles$$(section: RingSemiSectionItem, borderSide: string) {
    return {
      'border-color': section.color,
      [`border-top-${borderSide}-radius.px`]: this.diameter,
      [`border-bottom-${borderSide}-radius.px`]: this.diameter,
      'border-width.px': this.thickness,
      'z-index': section.index,
      transform: `rotate(${section.rotation}deg)`
    };
  }

  private calculateSections(): void {
    const partition: RingSectionsPartition = this.ringChartSrv.getRingSectionsPartition(this.sections);
    this.leftSections$$ = partition.leftSections;
    this.rightSections$$ = partition.rightSections;
  }

  private validateThickness(): void {
    const halfDiameter = this.diameter / 2;
    this.thickness = this.thickness > halfDiameter ? halfDiameter : this.thickness;
  }

  private validateSections(): void {
    if (!(this.sections instanceof Array)) {
      throw new Error('sections must be of type array');
    }

    let sum = 0;

    this.sections.forEach((section: RingSectionItem) => {
      if (isNaN(section.percentage) || section.percentage > 1) {
        throw new Error('section percentage must be a number and not bigger than 1');
      }

      sum += section.percentage;
    });

    if (sum > 1) {
      throw new Error('sections percentage sum must be equal to 1');
    }

    if (sum < 1) {
      this.sections = [
        ...this.sections,
        {
          color: 'inherit',
          percentage: 1 - sum
        }
      ];
    }
  }

}
