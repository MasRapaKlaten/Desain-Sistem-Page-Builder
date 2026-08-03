interface EditorState {
  currentPage: string;
  selectedComponent: string | null;
  activePopUp: "POP_UP_SETTING" | "POP_UP_COMPONENT_LIST" | null;
  currentLayerWrapper: number | null;
}
interface EditorAction{
  setField: SetField<EditorState>;
  openPopUp: (popUp: NonNullable<EditorState["activePopUp"]>) => void;
  closePopUp: () => void;
  resetEditor: () => void;
  resetField: ResetField<EditorState>;
}
type EditorStore = EditorState & EditorAction;
