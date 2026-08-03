interface MetaDataState {
  title: string;
  thumbnail: string;
  description: string;
  category: NewsCategoryType;
  schemaVersion: string;
}
interface MetaDataAction {
  setField: SetField<MetaDataState>
  resetMetaData: () => void;
  resetField: ResetField<MetaDataState>;
}
type MetaDataStore = MetaDataState & MetaDataAction;
