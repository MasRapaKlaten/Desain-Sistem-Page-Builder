export type EmptyAttribute = Readonly<Record<string, never>>;
export interface MappingAttribute {
  TITLE: TextContentAttribute;
  SUB_TITLE: TextContentAttribute;
  MINI_TITLE: TextContentAttribute;
  HEADLINE: TextContentAttribute;
  SUB_HEADLINE: TextContentAttribute;
  CIRCULAR_HEADLINE: TextContentAttribute;
  PARAGRAPH: ParagraphAttribute;
  TABLE: TableAttribute;
  PHOTO: PhotoAttribute;
  LEARN_MORE: LearnMoreAttribute;
  CARD: CardAttribute;
  CHAPTER: EmptyAttribute;
  SUB_CHAPTER: EmptyAttribute;
  CHAPTER_LIST: EmptyAttribute;
  SUB_CHAPTER_LIST: EmptyAttribute;
  PARAGRAPH_LIST: EmptyAttribute;
  CARD_LIST: EmptyAttribute;
  ITEM: TextContentAttribute;
  LIST: EmptyAttribute;
}
export type ComponentType = keyof MappingAttribute;
export type ParentId = "ROOT" | (string & {});
export interface ComponentModel {
  id: string;
  type: ComponentType;
  pageId: string;
  parentId: ParentId | undefined;
  childIds: ReadonlyArray<string> | undefined;
  depth: number | undefined;
}
export type ComponentNode = {
  [K in ComponentType]: ComponentModel & {type: K; attribute: MappingAttribute[K]}
}[ComponentType]
