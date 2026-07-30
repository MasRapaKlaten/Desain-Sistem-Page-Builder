interface EditorState {
  currentPage: string;
  selectedComponent: string | null;
  currentPopUp: "POP_UP_SETTING" | "POP_UP_COMPONENT_LIST" | null;
  currentLayerWrapper: number | null;
}
interface EditorAction{
  setField: <K extends keyof EditorState>(data: {field: K, value: Editor[K]}) => void; 
}
type EditorStore = EditorState & EditorAction;
