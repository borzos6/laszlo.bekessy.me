import * as React from 'react'
import PropTypes from 'prop-types';
import {Image, Content, Media, Box} from 'react-bulma-components';
import {box} from './styles.module.scss'

const ProjectCard = ({logo, name, url, children}) => {
  return (
    <Box className={`${box}`}>
        <Media renderAs="article">
          <Media.Item align='left'>
            <Image src={logo} size={64} alt="Project logo"/>
          </Media.Item>
          <Media.Item align="center">
            <Content size="small">
                <p>
                  <strong>{name}</strong>&nbsp;{url && <span>| <a href={url} target="_blank" rel='noreferrer'>Visit site</a></span>}
                  <br />
                  {children}
                </p>
              </Content>
          </Media.Item>
        </Media>
    </Box>           
  )
}

ProjectCard.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
};


export {ProjectCard};

