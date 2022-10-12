import * as React from 'react'
import { Container, Columns } from 'react-bulma-components';
import { SectionSentence } from '../../components/';
import { watercolor1Sketch } from '../../images';

const LeadSection = () => {
  return (
    <Container className='mt-4'>
        <Columns className="side-feature">
            <Columns.Column size={4} offset={1}>
                <SectionSentence
                    sentence="I lead teams"
                    imageSrc={watercolor1Sketch}
                    isLeft={true}
                />
            </Columns.Column>
            <Columns.Column size={6}>
                <h3 className="title is-3 mb-10 is-title-reveal">Handcrafted UI</h3>
                <p className="subtitle is-5 is-muted">
                    Fresh Landing Page comes with a nice component library based on Bulma. 
                    Each component has been carefully handcrafted.
                </p>
            </Columns.Column>
            
        </Columns>
    </Container>
  )
}

export {LeadSection};




