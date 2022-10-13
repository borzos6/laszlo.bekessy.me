import * as React from 'react'
import { Container, Columns, Content } from 'react-bulma-components';
import { ProjectCard } from '../../components/';
import { projectCodeBerry, projectYearCompass, projectInvisibleUniversity, projectABF } from '../../images';

const ProjectCardsSection = () => {
  return (
    <Container className='mt-4'>
        <Columns.Column>
            <Columns>
                <Columns.Column size={6} className="pt-1 pb-1">
                    <ProjectCard 
                        logo={projectCodeBerry} 
                        name="CodeBerry School"
                        url="https://codeberryschool.com"
                    >
                        <p>
                            <span className='has-text-weight-bold has-text-primary'>Co-founder, CEO, CTO </span> 
                            for a team of 40 from 14 countries.
                            <span className='has-text-weight-bold has-text-primary'> Raised €1.5M </span>
                            VC funding in three rounds. 100% remote team.
                        </p>
                    </ProjectCard>
                </Columns.Column>
                <Columns.Column size={6} className="pt-1 pb-1">
                    <ProjectCard 
                        logo={projectYearCompass} 
                        name="YearCompass Movement"
                        url="https://yearcompass.com"
                    >
                        <p>
                            <span className='has-text-weight-bold has-text-primary'>Co-founder and Project Lead </span> 
                            for a not-for-profit. Used by millions every year, translated to 
                            <span className='has-text-weight-bold has-text-primary'> 52 languages. </span>
                            100% remote team.
                        </p>
                    </ProjectCard>
                </Columns.Column>
                <Columns.Column size={6} className="pt-1 pb-1">
                    <ProjectCard 
                        logo={projectInvisibleUniversity} 
                        name="Invisible University"
                        url="https://lathatatlanegyetem.hu"
                    >
                        <p>
                            <span className='has-text-weight-bold has-text-primary'>Co-founder and Lead </span> 
                            of a <span className='has-text-weight-bold has-text-primary'>soft-skill-learning </span>
                            focused student organization led by hundreds of volunteers in 4 countries.
                        </p>
                    </ProjectCard>
                </Columns.Column>
                <Columns.Column size={6} className="pt-1 pb-1">
                    <ProjectCard 
                        logo={projectABF} 
                        name="ABF Informatics"
                        url=""
                    >
                        <p>
                            <span className='has-text-weight-bold has-text-primary'>Co-founder CEO, CTO </span> 
                            for an SMB developing <span className='has-text-weight-bold has-text-primary'> patient-safety software </span>
                            using self-generated code for the Hungarian Healthcare System.
                        </p>
                    </ProjectCard>
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




