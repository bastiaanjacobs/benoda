declare module '!!sass-variable-parser!*.scss' {
    type Value = string | { [key: string]: Value } | string[]
    const content: {
        [variableName: string]: Value
    }
    export default content
}
