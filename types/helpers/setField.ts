export type SetField<S> = <K extends keyof S>(payload: {field: K, value: S[K]}) => void;
