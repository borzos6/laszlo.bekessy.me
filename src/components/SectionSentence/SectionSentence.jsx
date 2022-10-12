import * as React from 'react'
import {Image} from 'react-bulma-components';
import PropTypes from 'prop-types';
import {sketch, containerLeft, containerRight, sentence} from './SectionSentence.module.scss'

const SectionSentence = (props) => {
  return (
    <div className={`${props.isLeft ? containerLeft : containerRight} has-text-centered`}>
        <Image src={props.imageSrc} className={`${sketch} image`} alt="Sketch"/>
        <h1 className={`${sentence}`}>{props.sentence}</h1>
    </div>                
  )
}

SectionSentence.propTypes = {
    isLeft: PropTypes.bool,
    sentence: PropTypes.string,
    imageSrc: PropTypes.string,
};


export {SectionSentence};

