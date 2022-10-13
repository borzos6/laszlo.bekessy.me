import * as React from 'react'
import { Container, Columns, Content } from 'react-bulma-components';
import { SectionSentence } from '../../components/';
import { watercolor2Sketch } from '../../images';
import { StrongestTechStackSection } from '../../sections/';

const TechSection = () => {
  return (
    <Container className='bg-gray-5p py-5'>
        <Columns className="side-feature" vCentered={true}>
            <Columns.Column size={6} offset={1} >
                <h3 className="title is-size-3 mb-0 is-title-reveal">
                     <span className='has-text-info'>CTO, architect, </span>software engineer for {`${new Date().getFullYear()-2004}`}+ years
                </h3>
                <Content>
                    <ul>
                        <li><span className='has-text-weight-bold'>Full-stack generalist</span>, touched and worked with every aspect of software engineering</li>
                        <li>Specialist in <span className='has-text-weight-bold'>vertical integration. </span>Comfortably working from infrastructure to UX design</li>
                        <li><span className='has-text-weight-bold'>Tech lead with human touch</span> – focuses on people-first management as a leader</li>
                    </ul>
                </Content>
            </Columns.Column>
            <Columns.Column size={4}>
                <SectionSentence
                    sentence="I'm a tech generalist"
                    imageSrc={watercolor2Sketch}
                    isLeft={false}
                />
            </Columns.Column>
            <Columns.Column size={10} offset={1} className="mt-3">
                <h4 className="title mb-0 is-size-5">
                    My actual <span className='has-text-info'>strongest</span> stack
                </h4>
                <StrongestTechStackSection/>
            </Columns.Column>
        </Columns>

        

    </Container>
  )
}

export {TechSection};




