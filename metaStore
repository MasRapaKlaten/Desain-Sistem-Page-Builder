interface MetaDataState {
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  schemaVersion: string;
}
interface MetaDataAction {
  setField: <K extends keyof MetaState>(data: {field: K, value: MetaState[K]}) => void; 
}
type MetaDataStore = MetaDataState & MetaDataAction;
