import * as React from 'react'
import PropTypes from 'prop-types';
import {Content} from 'react-bulma-components';
import {iconWrap, icon} from './TechStackElement.module.scss'

const TechStackElement = ({devicon, name}) => {
  return (
    <Content small={true} className="has-text-centered">
        <div className={`${iconWrap}`}>
            <i className={`devicon-${devicon}-plain colored ${icon}`}></i>
        </div>
        
        <small>{name}</small>
    </Content>
  )
}

TechStackElement.propTypes = {
    devicon: PropTypes.string,
    name: PropTypes.string,
};


export {TechStackElement};

