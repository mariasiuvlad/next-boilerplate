/** @TODO change to yml */
module.exports = {
  schema: 'graphql.schema.json',
  documents: ['./src/lib/graphql/queries.ts', './src/lib/graphql/mutations.ts'],
  overwrite: true,
  generates: {
    './src/__generated__/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
