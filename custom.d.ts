declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number]
