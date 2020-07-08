import User from '@components/User'
import Layout from '@components/Layout'
import {withAuthApollo} from '@lib/graphql/GQLProvider'
import withLogin from '@components/util/withLogin'

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

export default withAuthApollo(withLogin(DashboardPage))
