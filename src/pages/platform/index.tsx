import User from '@molecule/UserInfo'
import {withLayout} from '@organism/Layout'
import {withAuthApollo} from '@lib/graphql/GQLProvider'
import privatePage from '@components/util/privatePage'
import CreateTournament from '@components/form/CreateTournament'
import ListTournaments from '@organism/ListTournament'

const Page = () => (
  <div className="my-16 container max-w-2xl">
    <User />
    <ListTournaments />
    <CreateTournament />
  </div>
)

const DashboardPage = () => {
  return <Page />
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

export default withAuthApollo(withLayout(privatePage(DashboardPage)))
