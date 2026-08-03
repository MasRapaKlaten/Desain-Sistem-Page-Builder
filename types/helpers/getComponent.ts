type GetComponent = <T extends ComponentType>(state: ReturnType<typeof usePageDataStore.getState>, componentId: string, type: T) => ComponentModel & { attribute: ComponentAttribute[T]} | null;
