import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { Container, Columns, Content } from 'react-bulma-components';
import { TechStackElement } from '../../components/';
import { projectCodeBerry, projectYearCompass, projectInvisibleUniversity, projectABF } from '../../images';

const StrongestTechStackSection = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentJson {
                nodes {
                strongestActualTechStack {
                    devicon
                    name
                }
                }
            }
        }
    `)
  return (
    <Columns className='mt-4'>
        {
            data.allContentJson.nodes[0].strongestActualTechStack.map(node => (
                <TechStackElement devicon={node.devicon} name={node.name}/>
            ))
        }        
    </Columns> 
  )
}

export {StrongestTechStackSection};




