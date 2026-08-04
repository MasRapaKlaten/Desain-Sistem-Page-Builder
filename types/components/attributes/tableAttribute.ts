export interface RowAttribute {
  id: string;
  colIds: ReadonlyArray<string>;
}
export interface ColAttribute {
  id: string;
  rowId: string;
  content: string;
}
export interface TableAttribute {
  totalCols: number;
  colsWidth: ReadonlyArray<string>;
  headerRowId: string;
  bodyRowIds: ReadonlyArray<string>;
  rowById: Readonly<Record<string, RowAttribute>>;
  colById: Readonly<Record<string, ColAttribute>>;
}
