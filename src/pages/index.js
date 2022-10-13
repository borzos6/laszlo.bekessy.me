import * as React from 'react'
import { Layout } from '../components'
import { IntroSection, LeadSection, TechSection, TalentSection } from '../sections'
import { Divider } from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <IntroSection/>
      <Divider text="and this is what I do"/>
      <LeadSection/>
      <div className='pt-6'></div>
      <TechSection/>
      <div className='pt-6'></div>
      <TalentSection/>
      <Divider text="let's work together"/>
      <Divider text="sometimes I say things publicly"/>
      <Divider text="and I'm excited about these topics"/>
    </Layout>
  )
}

export const Head = () => <title>FIXME SEO</title>

export default IndexPage