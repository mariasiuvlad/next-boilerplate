# Getting Started

## Development
1. Install dependencies: `yarn`
2. Start local infrstructure environment: `cd infrastructure && ./start.sh`
3. Setup user with permissions for select&update (id, avatr_url, display_name, updated_at, created_at): http://localhost:8080/console/data/schema/public/tables/users/permissions // @todo - automate
4. Start codegen watcher fro graphQl: `yarn codegen`
5. Start next dev `yarn dev`
6. Acces on http://localhost:9009


## Testing
`yarn test`

## Learn More
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


