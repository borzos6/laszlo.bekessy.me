import * as React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {container} from './ContactPoints.module.scss'

const ContactPoints = () => {
  return (
    <h2 className={`is-size-3 is-muted ${container}`}>
        <a href="https://www.facebook.com/bekessy.laszlo" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} />
        </a>&nbsp;
        <a href="https://linkedin.com/in/laszlo-bekessy" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>&nbsp;
        <a href="https://github.com/borzos6" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} />
        </a>
    </h2>              
  )
}

export {ContactPoints};




