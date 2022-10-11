import * as React from 'react'
import { Hero, Container, Columns } from 'react-bulma-components';
import { ContactPoints, IntroPicture } from '../../components/';

const IntroSection = () => {
  return (
    <Hero>
        <Hero.Body>
            <Container>
                <Columns vCentered={true}>
                    <Columns.Column size={6} offset={1} className="landing-caption">
                        <h2 className="subtitle is-5 is-muted">
                            Hello. My name is
                        </h2>
                        <h1 className="title is-size-2 is-bold">
                            László Békéssy
                        </h1>
                        <ContactPoints/>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <IntroPicture/>
                    </Columns.Column>
                </Columns>
            </Container>
        </Hero.Body>
    </Hero>
  )
}

export {IntroSection};




