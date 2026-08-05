interface MetaDataState {
  title: string;
  thumbnail: string;
  description: string;
  category: NewsCategoryType;
  schemaVersion: string;
}
interface MetaDataAction {
  setField: <K extends keyof MetaDataState>(payload: {field: K, value: MetaDataState[K]}) => void;
  resetMetaData: () => void;
  resetField: <K extends keyof MetaDataState>(field: K) => void;
}
type MetaDataStore = Readonly<MetaDataState> & MetaDataAction;
