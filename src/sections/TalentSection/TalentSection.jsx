import * as React from 'react'
import { Container, Columns, Content } from 'react-bulma-components';
import { SectionSentence, Testimonials } from '../../components/';
import { watercolor3Sketch } from '../../images';

const TalentSection = () => {
  return (
    <Container className='bg-gray-5p py-5'>
        <Columns className="side-feature" vCentered={true}>
            <Columns.Column size={4} offset={1}>
                <SectionSentence
                    sentence="I help the talented"
                    imageSrc={watercolor3Sketch}
                    isLeft={true}
                />
            </Columns.Column>
            <Columns.Column size={6}  >
                <h3 className="title is-size-3 mb-0 is-title-reveal">
                    <span className='has-text-danger'>500+ hours </span>spent in teaching and coaching
                </h3>
                <Content>
                    <ul>
                        <li>Extensive experience in <span className='has-text-weight-bold'>leading workshops</span> for 3 to 150 people</li>
                        <li>Helped team leaders on <span className='has-text-weight-bold'>1-on-1 leadership coachings</span> for more than {`${new Date().getFullYear()-2017}`} years</li>
                        <li><span className='has-text-weight-bold'>Published many practical tools</span> and curriculum for fellow business founders</li>
                        <li><span className='has-text-weight-bold'>Startup & Scaleup Board Member </span>of the Association of the Digital Economy in Hungary</li>
                    </ul>
                </Content>
            </Columns.Column>
            <Testimonials/>
        </Columns>
    </Container>
  )
}

export {TalentSection};




