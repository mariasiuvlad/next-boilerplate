import User from '@molecule/UserInfo'
import Layout from '@organism/Layout'
import {withAuthApollo} from '@lib/graphql/GQLProvider'
import withLogin from '@components/util/withLogin'
import CreateTournament from '@components/form/CreateTournament'
import ListTournaments from '@organism/ListTournament'

const DashboardPage = () => {
  return (
    <Layout>
      <div className="my-16 container max-w-2xl">
        <User />
        <ListTournaments />
        <CreateTournament />
      </div>
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
