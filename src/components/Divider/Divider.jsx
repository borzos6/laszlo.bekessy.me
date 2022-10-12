import * as React from 'react'
import PropTypes from 'prop-types';
import {divider} from './Divider.module.scss'

const Divider = (props) => {
  return (
    <div className={divider}>
        {props.text}
    </div>                
  )
}

Divider.propTypes = {
    text: PropTypes.string,
};

export {Divider};

