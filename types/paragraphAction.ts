type SpanAttribute = ParagraphAttribute['spanById'][string];
interface ParagraphAction {
  addSpan: (data: { componentId: string}) => void;
  deleteSpan: (data: { componentId: string, spanId: string}) => void;
  editSpan: <K extends keyof SpanAttribute>(data: { componentId: string, spanId: string, key: K, value: SpanAttribute[K]}) => void;
}
