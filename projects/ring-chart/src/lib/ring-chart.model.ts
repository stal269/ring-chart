export interface RingSectionItem {
    percentage: number;
    color: string;
}

export interface RingSemiSectionItem {
    index: number;
    rotation: number;
    color: string;
}

export interface RingSectionsPartition {
  leftSections: RingSemiSectionItem[];
  rightSections: RingSemiSectionItem[];
}
