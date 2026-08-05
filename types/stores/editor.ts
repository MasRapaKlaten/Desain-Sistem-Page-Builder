interface EditorState {
  currentPage: string;
  selectedComponent: string | null;
  activePopUp: "POP_UP_SETTING" | "POP_UP_COMPONENT_LIST" | null;
  currentLayerWrapper: number | null;
}
interface EditorAction{
  setField: <K extends keyof EditorState>(payload: {field: K, value: EditorState[K]}) => void;
  openPopUp: (popUp: NonNullable<EditorState["activePopUp"]>) => void;
  closePopUp: () => void;
  resetEditor: () => void;
  resetField: <K extends keyof EditorState>(field: K) => void;
}
type EditorStore = Readonly<EditorState> & EditorAction;
