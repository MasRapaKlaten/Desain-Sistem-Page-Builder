type AllowedComponent = Partial<Record<ComponentType, ComponentType[]>>;
type DefaultAttribute = Partial<{[K in ComponentType]: ComponentAttribute[K]}>
type SpecialComponent = Array<ComponentType>;
