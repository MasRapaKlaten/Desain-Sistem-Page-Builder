interface TableAction {
  addRow: (componentId: string) => void;
  deleteRow: (payload: { componentId: string, rowId: string}) => void;
  addCol: (componentId: string) => void;
  deleteCol: (payload: { componentId: string, index: number}) => void;
  editCol: <K extends keyof ColAttribute>(payload: { componentId: string, colId: string, key: K, value: ColAttribute[K]}) => void;
  editColsWidth: (payload: { componentId: string, index: number, value: string}) => void 
}