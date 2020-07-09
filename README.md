[![codecov](https://codecov.io/gh/softatac/pt-web/branch/master/graph/badge.svg?token=B3PKAWJQU1)](https://codecov.io/gh/softatac/pt-web)
![Tests](https://github.com/softatac/pt-web/workflows/Run%20tests/badge.svg)

# Getting Started

Checkout `package.json` for available commands

## Development

1. Install dependencies: `yarn`
2. Start local infrstructure environment: `cd infrastructure && ./start.sh && cd ..`
3. Start next dev `yarn dev`
4. Acces on http://localhost:9009

### Codegen

Update GraphQL schema from Backend with: `yarn codegen:update` (setup secret accordingly in _codegen-update.js_)

## Testing

- full suite: `yarn test`
- individual file: `npx jest -i src/components/Icon/Icon.test.tsx`

## Front-end development

[Components guidelines](src/components/README.md)

[Storybook](https://storybook.js.org)

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
