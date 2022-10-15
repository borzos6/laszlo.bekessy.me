import * as React from 'react';
import { Container, Columns, Content } from 'react-bulma-components';
import { Splash, ProjectCards } from '../../components';
import { watercolor1Sketch } from '../../images';
import {} from '..';

const Lead = () => {
    return (
        <Container className="bg-gray-5p pt-0 mb-0 px-1">
            <Columns className="side-feature is-mobile" vCentered={true}>
                <Columns.Column
                    mobile={{
                        size: 8,
                        offset: 2,
                    }}
                    tablet={{
                        size: 5,
                    }}
                    desktop={{
                        size: 4,
                        offset: 1,
                    }}>
                    <Splash sentence="I lead teams" imageSrc={watercolor1Sketch} isLeft={true} />
                </Columns.Column>
                <Columns.Column
                    tablet={{
                        size: 7,
                    }}
                    desktop={{
                        size: 6,
                    }}>
                    <h3 className="is-size-3-desktop is-size-4-tablet mb-0 pl-5 pt-4 title is-title-reveal">
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
            <ProjectCards />
        </Container>
    );
};

export { Lead };
