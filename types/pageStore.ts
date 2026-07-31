interface PageDataState {
  totalPages: number;
  pageIds: Array<string>;
  pageById: Record<string, {id: string; rootComponentIds: Array<string>; componentIds: Array<string>}>;
  componentById: Record<string, NodeComponent>;
}
interface PageDataAction {
  addPage: (data: {pageId: string}) => void;
  deletePage: (data: {pageId: string}) => void;
  addComponent: (data: { componentData: NodeComponent}) => void;
  deleteComponent: (data: { componentId: string}) => void;
  editComponent: <T extends ComponentType, K extends keyof ComponentAttribute[T]>(data: {componentId: string, type: T, key: K, value: ComponentAttribute[T][K]}) => void;
}
type PageDataStore = PageDataState & PageDataAction;
