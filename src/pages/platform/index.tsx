import User from '@components/User'
import withLogin from '@components/util/withLogin'
import Layout from '@components/Layout'

const DashboardPage = () => {
  return (
    <Layout>
      <User />
    </Layout>
  )
}

/**
 * @example SSR auth and prefetch graphql data
 * @link https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 *
 */
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   let props: any = await refreshAuth(ctx)
//   props = await preloadApolloData(props, [GetUserDocument])
//   return {props}
// }

export default withLogin(DashboardPage)
