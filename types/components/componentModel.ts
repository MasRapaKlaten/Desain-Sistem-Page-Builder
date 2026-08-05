export type EmptyAttribute = Record<string, never>;
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
export interface ComponentModel {
  id: string;
  type: ComponentType;
  pageId: string;
  isRoot: boolean;
  parentId?: string;
  childIds?: Array<string>;
  depth?: number;
}
export type ComponentModelType<T extends ComponentType> = ComponentModel & {type: T; attribute: MappingAttribute[T]};
export type ComponentNode = {
  [K in ComponentType]: ComponentModelType<K>
}[ComponentType]
