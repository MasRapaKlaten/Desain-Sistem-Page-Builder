export interface SpanAttribute{
  id: string;
  content: string;
  bold: boolean, italic: boolean;
  underline: boolean;
}
export interface ParagraphAttribute {
  spanIds: ReadonlyArray<string>;
  spansById: Readonly<Record<string, SpanAttribute>>;
}
