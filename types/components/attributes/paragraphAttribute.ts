export interface SpanAttribute{
  id: string;
  content: string;
  bold: boolean, italic: boolean;
  underline: boolean;
}
export interface ParagraphAttribute {
  spanIds: Array<string>;
  spansById: Record<string, SpanAttribute>;
}
