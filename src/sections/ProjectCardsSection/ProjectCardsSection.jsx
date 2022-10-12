import * as React from 'react'
import { Container, Columns, Content } from 'react-bulma-components';
import { ProjectCard } from '../../components/';
import { projectCodeBerry, projectYearCompass, projectInvisibleUniversity, projectABF } from '../../images';

const ProjectCardsSection = () => {
  return (
    <Container className='mt-4'>
        <Columns.Column>
            <Columns>
                <Columns.Column size={6}>
                    <ProjectCard 
                        logo={projectCodeBerry} 
                        name="CodeBerry School"
                        url="https://codeberryschool.com"
                    >
                        <p>Co-founder and CEO for a team of 40 from 14 countries. Secured €1.5M VC funding in three rounds. 100% remote team.</p>
                    </ProjectCard>
                </Columns.Column>
                <Columns.Column size={6}>
                    <ProjectCard 
                        logo={projectYearCompass} 
                        name="YearCompass Movement"
                        url="https://yearcompass.com"
                    >
                         <p>Co-founder and Lead for a not-for/-profit. Used by millions every year, translated to 52 languages. 100% remote team.</p>
                    </ProjectCard>
                </Columns.Column>
                <Columns.Column size={6}>
                    <ProjectCard 
                        logo={projectInvisibleUniversity} 
                        name="Invisible University"
                        url="https://lathatatlanegyetem.hu"
                    />
                </Columns.Column>
                <Columns.Column size={6}>
                    <ProjectCard 
                        logo={projectABF} 
                        name="ABF Informatics"
                        url=""
                    />
                </Columns.Column>
            </Columns>
            <Content className="has-text-centered" size="small">
                <p> ... and many more</p>
            </Content>
        </Columns.Column>    
    </Container>
  )
}

export {ProjectCardsSection};




