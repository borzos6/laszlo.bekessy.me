import * as React from 'react';
import { Container, Columns, Content } from 'react-bulma-components';
import { Splash } from '../../components/';
import { watercolor1Sketch } from '../../images';
import { ProjectCardsSection } from '../../sections';

const LeadSection = () => {
    return (
        <Container className="bg-gray-5p py-5">
            <Columns className="side-feature" vCentered={true}>
                <Columns.Column size={4} offset={1}>
                    <Splash sentence="I lead teams" imageSrc={watercolor1Sketch} isLeft={true} />
                </Columns.Column>
                <Columns.Column size={6}>
                    <h3 className="title is-size-3 mb-0 is-title-reveal">
                        <span className="has-text-danger">{`${new Date().getFullYear() - 2008}`} years</span> in
                        leadership
                    </h3>
                    <Content>
                        <ul>
                            <li>
                                Leading teams of 4 to 250 <span className="has-text-weight-bold">since 2008</span>
                            </li>
                            <li>
                                <span className="has-text-weight-bold">Founder</span> of multiple non-profits (9y), SMBs
                                (3y) and Startups (7y)
                            </li>
                            <li>
                                Practical experience in building{' '}
                                <span className="has-text-weight-bold">
                                    diverse, multi-language, multi-culture teams
                                </span>{' '}
                                (8y)
                            </li>
                            <li>
                                Serial entrepreneur from heart, founded and validated{' '}
                                <span className="has-text-weight-bold">more than 30 projects</span>
                            </li>
                        </ul>
                    </Content>
                </Columns.Column>
            </Columns>

            <ProjectCardsSection />
        </Container>
    );
};

export { LeadSection };
