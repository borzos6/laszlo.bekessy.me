import * as React from 'react';
import { Container, Columns } from 'react-bulma-components';
import { TestimonialCard } from '..';
import { avatarNora, avatarSzilvia } from '../../images';

const Testimonials = () => {
    return (
        <Container>
            <Columns.Column>
                <Columns>
                    <Columns.Column tablet={{ size: 6 }}>
                        <TestimonialCard
                            name="Nóra"
                            date="2022-03"
                            thumbnail={avatarNora}
                            oneliner="Invaluable experience with very good intentions">
                            <p>
                                Working with László was an amazing experience—he was always professional and willing to
                                help. He tried to pass on his knowledge and experience of the startup world to us and
                                helped us identify areas where we needed to improve our thinking. He always treated the
                                team with utmost respect and he showed a lot of patience where we needed time to
                                organize our thoughts.
                                <br />
                                <br />
                                We would definitely choose him as our mentor again—he's an invaluable resource with very
                                good intentions.
                            </p>
                        </TestimonialCard>
                    </Columns.Column>
                    <Columns.Column tablet={{ size: 6 }}>
                        <TestimonialCard
                            name="Szilvia"
                            date="2022-10"
                            thumbnail={avatarSzilvia}
                            oneliner="Helping me become the confident leader I am today">
                            <p>
                                My leadership experience with László was truly fruitful. László fostered an atmosphere
                                to bring out my own personal leading style.
                                <br />
                                <br />
                                He is someone who is able to see your potential and what kind of a leader you could be,
                                and he pushed me to be that leader instead of trying to fit me into a mould. This
                                experience helped me to understand my own strengths and weaknesses as a leader, and it
                                also showed me the importance of being true to myself.
                            </p>
                        </TestimonialCard>
                    </Columns.Column>
                </Columns>
            </Columns.Column>
        </Container>
    );
};

export { Testimonials };
