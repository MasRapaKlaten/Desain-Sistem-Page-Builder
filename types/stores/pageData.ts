interface Page {
  id: string;
  rootComponentIds: Array<string>;
  componentIds: Array<string>;
}
interface PageDataState {
  totalPages: number;
  pageIds: Array<string>;
  pagesById: Record<string, Page>;
  componentsById: Record<string, NodeComponent>;
}
interface PageDataAction {
  addPage: (pageId: string) => void;
  deletePage: (pageId: string) => void;
  addComponent: (componentData: NodeComponent) => void;
  deleteComponent: (componentId: string) => void;
  updateComponentAttribute: <T extends keyof ComponentAttribute, K extends keyof ComponentAttribute[T]>(payload: {componentId: string, type: T, key: K, value: ComponentAttribute[T][K]}) => void;
  resetComponentAttribute: (payload: {componentId: string, type: ComponentType}) => void;
  resetComponentKeyAttribute: <T extends keyof ComponentAttribute>(payload: {componentId: string, type: T, key: keyof ComponentAttribute[T]}) => void;
}
type PageDataStore = PageDataState & PageDataAction;