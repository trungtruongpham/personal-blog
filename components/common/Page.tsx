import type { ReactElement } from 'react'
import Layout from './Layout'

export default function Page() {
  return {
    /** Your content */
  }
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}