import * as React from 'react';
import { Hero, Container, Columns } from 'react-bulma-components';
import { ContactPoints, IntroPicture } from '../../components';

const Intro = () => {
    return (
        <Hero>
            <Hero.Body>
                <Container>
                    <Columns vCentered={true}>
                        <Columns.Column size={4} offset={1} className="landing-caption has-text-centered">
                            <h2 className="subtitle is-size-5 is-muted">Hello. I am</h2>
                            <h1 className="title is-size-2 is-bold">
                                László <br /> Békéssy
                            </h1>
                            <ContactPoints />
                        </Columns.Column>
                        <Columns.Column offset={1} size={6}>
                            <IntroPicture />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
    );
};

export { Intro };
