type OptionalProp<T, K extends keyof T> = T extends object
    ? Pick<T, Exclude<keyof T, K>> & { [P in keyof Pick<T, K>]?: T[P] }
    : never
