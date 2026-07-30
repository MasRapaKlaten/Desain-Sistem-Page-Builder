interface TextContentAttribute {
  content: string;
}
interface ParagraphAttribute {
  spanIds: Array<string>;
  spanById: Record<string, {
    id: string;
    content: string;
    bold: boolean;
    italic: boolean;
    underline: boolean
  }>;
}
interface TableAttribute {
  totalCols: number;
  colsWidth: Array<string>;
  rowTheadId: string;
  rowTbodyIds: Array<string>;
  rowById: Record<string, {
    id: string;
    colIds: Array<string>
  }>;
  colById: Record<string, {
    id: string;
    parentId: string;
    content: string
  }>;
}
interface PhotoAttribute {
  photoUrl: string;
}
interface LearnMoreAttribute {
  content: string;
  link: string;
}
interface CardAttribute {
  content: string;
  photoUrl: string;
}

type EmptyAttribute = Record<string, never>;
interface ComponentAttribute {
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
type ComponentType = keyof ComponentAttribute;
interface ComponentModel {
  id: string;
  type: ComponentType;
  pageId: string;
  parentId: string;
  childIds: Array<string>;
  depth: number;
}
type NodeComponent = {
  [K in ComponentType]: ComponentModel & {
    type: K;
    attribute: ComponentAttribute[K]
  }
}[ComponentType]
