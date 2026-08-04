interface Page {
  id: string;
  rootComponentIds: ReadonlyArray<string>;
  componentIds: ReadonlyArray<string>;
}
export interface PageDataState {
  totalPages: number;
  pageIds: ReadonlyArray<string>;
  pagesById: Readonly<Record<string, Page | undefined>>;
  componentsById: Readonly<Record<string, ComponentNode | undefined>>;
}
interface PageDataAction {
  addPage: (pageId: string) => void;
  deletePage: (pageId: string) => void;
  addComponent: (payload: {id: string, pageId: string, type: ComponentType}) => void;
  deleteComponent: (componentId: string) => void;
  updateComponentAttribute: <T extends keyof MappingAttribute, K extends keyof MappingAttribute[T]>(payload: {componentId: string, type: T, key: K, value: MappingAttribute[T][K]}) => void;
  resetComponentAttribute: (payload: {componentId: string, type: ComponentType}) => void;
  resetComponentKeyAttribute: <T extends keyof MappingAttribute>(payload: {componentId: string, type: T, key: keyof MappingAttribute[T]}) => void;
  linkComponent: (payload: {pageId: string, parentId: ParentId, childId: string}) => void;
  unlinkComponent: (payload: {pageId: string, parentId: ParentId, childId: string}) => void;
  updateDepth: (payload: {pageId: string, componentId: string}) => void;
}
type PageDataStore = PageDataState & PageDataAction;
