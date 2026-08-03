export interface RowAttribute {
  id: string;
  colIds: Array<string>;
}
export interface ColAttribute {
  id: string;
  rowId: string;
  content: string;
}
export interface TableAttribute {
  totalCols: number;
  colsWidth: Array<string>;
  headerRowId: string;
  bodyRowIds: Array<string>;
  rowById: Record<string, RowAttribute>;
  colById: Record<string, ColAttribute>;
}