export type ResetField<S> = <K extends keyof S>(field: K) => void;
