import * as React from 'react'
import {Link} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {container} from './ContactPoints.module.scss'

const ContactPoints = () => {
  return (
    <h2 className={`is-size-3 is-muted ${container}`}>
        <Link to="https://www.facebook.com/bekessy.laszlo" target="_blank">
            <FontAwesomeIcon icon={faFacebookSquare} />
        </Link>&nbsp;
        <Link to="https://linkedin.com/in/laszlo-bekessy" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
        </Link>&nbsp;
        <Link to="https://github.com/borzos6" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} />
        </Link>
    </h2>              
  )
}

export {ContactPoints};




