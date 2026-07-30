type ColAttribute = TableAttribute['colById'][string];
interface TableAction {
  addRow: (data: { componentId: string}) => void;
  deleteRow: (data: { componentId: string, rowId: string}) => void;
  addCol: (data: { componentId: string}) => void;
  deleteCol: (data: { componentId: string, index: number}) => void;
  editCol: <K extends keyof ColAttribute>(data: { componentId: string, colId: string, key: K, value: ColAttribute[K]}) => void;
  editColsWidth: (data: { componentId: string, index: number, value: string}) => void 
}
