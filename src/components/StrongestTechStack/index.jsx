import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Columns } from 'react-bulma-components';
import { TechStackIcon } from '..';

const StrongestTechStack = () => {
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
    `);
    return (
        <Columns className="mt-4">
            {data.allContentJson.nodes[0].strongestActualTechStack.map((node) => (
                <TechStackIcon key={node.name} devicon={node.devicon} name={node.name} />
            ))}
        </Columns>
    );
};

export { StrongestTechStack };
