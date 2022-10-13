import * as React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faSquareEnvelope} from '@fortawesome/free-solid-svg-icons';
import {container} from './ContactPoints.module.scss'

const ContactPoints = () => {
  return (
    <h2 className={`is-size-3 is-muted ${container}`}>
        <a href="https://linkedin.com/in/laszlo-bekessy" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        &nbsp;
        <a href="https://github.com/borzos6" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        &nbsp;
        <a href="mailto:laszlo@bekessy.me" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSquareEnvelope} />
        </a>
    </h2>              
  )
}

export {ContactPoints};




