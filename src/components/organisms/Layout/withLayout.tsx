import Layout from './Layout'

const withLayout = (WrappedComponent) => (props) => (
  <Layout>
    <WrappedComponent {...props} />
  </Layout>
)

export default withLayout
