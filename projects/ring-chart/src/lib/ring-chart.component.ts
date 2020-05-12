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
      this.validateAndUpdateThickness();
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

  private validateAndUpdateThickness(): void {
    this.thickness = this.ringChartSrv.getThickness(this.thickness, this.diameter);
  }

  private validateSections(): void {
    this.ringChartSrv.validateSections(this.sections);
  }

}
