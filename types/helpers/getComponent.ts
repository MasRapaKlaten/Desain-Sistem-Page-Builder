type GetComponent = <T extends ComponentType>(state: PageDataState, componentId: string, type: T) => ComponentModel & { attribute: ComponentAttribute[T]} | null;
