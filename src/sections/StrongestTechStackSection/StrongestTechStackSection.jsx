import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Columns } from 'react-bulma-components';
import { TechStackElement } from '../../components/';

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




