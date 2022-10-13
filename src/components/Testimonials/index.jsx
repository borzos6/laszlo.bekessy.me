import * as React from 'react'
import { Container, Columns, Content } from 'react-bulma-components';
import { TestimonialCard } from '../../components/';
import { avatarNora, avatarSzilvia, avatarLaszlo, avatarEszter } from '../../images';

const Testimonials = () => {
  return (
    <Container className='mt-4'>
        <Columns.Column>
            <Columns>
                <Columns.Column size={4}>
                    <TestimonialCard
                        name="Nóra"
                        date="2022-03"
                        thumbnail={avatarNora}
                        oneliner="Invaluable experience and good intentions are rare to come by"
                    >
                        <p>
                            "Working with László was a complete and positive experience - 
                            he always treated all of the team members with full professionalism and a huge desire to help. 
                            <br/><br/>
                            
                            He tried to direct us using the knowledge and experience he gained in the world of startups, 
                            and actively helped to see when we could have been thinking about a topic differently. 
                            <br/><br/>
                            
                            We would choose him again as a mentor anytime, because invaluable experience and good intentions are rare to come by."
                        </p>
                    </TestimonialCard>
                </Columns.Column>
                <Columns.Column size={4}>
                    <TestimonialCard
                        name="László"
                        date="2022-10"
                        thumbnail={avatarLaszlo}
                        oneliner="Would buy again 😎"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin magna nec mattis euismod. 
                            <br/><br/>
                            Ut fermentum varius sagittis. Mauris at metus rutrum, rhoncus felis vitae, ornare ante. Nulla ut quam 
                            scelerisque, facilisis purus in, maximus turpis. In aliquam pharetra ipsum. Donec a libero rutrum,
                            accumsan nisi ac, scelerisque mauris. Fusce finibus sodales sodales. Maecenas posuere mauris ac 
                            <br/><br/>
                        </p>
                    </TestimonialCard>
                </Columns.Column>
                <Columns.Column size={4}>
                    <TestimonialCard
                        name="Szilvia"
                        date="2022-8"
                        thumbnail={avatarSzilvia}
                        oneliner="Something is important"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin magna nec mattis euismod. 
                            <br/><br/>
                            Ut fermentum varius sagittis. Mauris at metus rutrum, 
                            <br/><br/>
                            rhoncus felis vitae, ornare ante. Nulla ut quam 
                            scelerisque, 
                            <br/><br/>
                            facilisis purus in, maximus turpis. In aliquam pharetra ipsum. Donec a libero rutrum,
                            accumsan nisi ac, scelerisque mauris. Fusce finibus sodales sodales. Maecenas posuere mauris ac 
                            <br/><br/>
                        </p>
                    </TestimonialCard>
                </Columns.Column>
            </Columns>
        </Columns.Column>    
    </Container>
  )
}

export {Testimonials};




