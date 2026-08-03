interface ParagraphAction {
  addSpan: (componentId: string) => void;
  deleteSpan: (payload: {componentId: string, spanId: string }) => void;
  editSpan: <K extends keyof SpanAttribute>(payload: { componentId: string, spanId: string, key: K, value: SpanAttribute[K]}) => void;
}
