import * as React from 'react'
import { Container, Columns, Content } from 'react-bulma-components';
import { SectionSentence } from '../../components/';
import { StrongestTechStackSection } from '../../sections/';
import { watercolor2Sketch } from '../../images';

const TechSection = () => {
  return (
    <Container className='mt-4'>
        <Columns className="side-feature" vCentered={true}>
            <Columns.Column size={6} offset={1} >
                <h4 className="title is-size-4 mb-0 is-title-reveal">
                    CTO, architect, engineer for <span className='has-text-primary'>{`${new Date().getFullYear()-2004}`}+ years</span>
                </h4>
                <Content size="small">
                    <ul>
                        <li><span className='has-text-weight-bold'>Full-stack generalist</span>, touched and worked with every aspect of software engineering</li>
                        <li>Specialist in <span className='has-text-weight-bold'>vertical integration. </span>From infrastructure to customer experience</li>
                        <li>Wrote 5 <span className='has-text-weight-bold'>self-generating software</span> for different business cases</li>
                        <li>Tech lead with human touch – focuses on <span className='has-text-weight-bold'>people-first management </span> as a leader</li>
                    </ul>
                </Content>
                <h4 className="title mb-0 is-size-5">
                    My actual strongest stack
                </h4>
                <StrongestTechStackSection/>
            </Columns.Column>
            <Columns.Column size={4}>
                <SectionSentence
                    sentence="I'm a tech generalist"
                    imageSrc={watercolor2Sketch}
                    isLeft={false}
                />
            </Columns.Column>
        </Columns>

        

    </Container>
  )
}

export {TechSection};




