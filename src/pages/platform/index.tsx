import User from '@molecule/UserInfo'
import Layout from '@organism/Layout'
import CreateTournament from '@components/form/CreateTournament'
import ListTournaments from '@organism/ListTournament'
import PrivateRoute from '@components/route/PrivateRoute'

const Dashboard = () => (
  <div className="py-16 container max-w-2xl">
    <User />
    <ListTournaments />
    <CreateTournament />
  </div>
)

const DashboardPage = () => <PrivateRoute render={Dashboard} />

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

DashboardPage.getLayout = Layout

export default DashboardPage
