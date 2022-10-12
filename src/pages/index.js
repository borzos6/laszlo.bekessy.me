import * as React from 'react'
import { Layout } from '../components'
import { IntroSection } from '../sections'
import { Divider } from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <IntroSection/>
      <Divider text="and this is what I do"/>
    </Layout>
  )
}

export const Head = () => <title>FIXME SEO</title>

export default IndexPage