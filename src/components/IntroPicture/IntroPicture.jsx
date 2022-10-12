import * as React from 'react'
import {Image} from 'react-bulma-components';
import {profilePicture, globe1Sketch, globe2Sketch} from '../../images'
import {profile, sketch, picture, container} from './IntroPicture.module.scss'

const IntroPicture = () => {
  return (
    <div className={container}>
        <Image src={profilePicture} className={`${profile} ${picture}`} alt="Profile"/>
        <Image src={globe1Sketch} className={`${sketch} ${picture}`} alt="Sketch"/>
        <Image src={globe2Sketch} className={`${sketch} ${picture}`} alt="Sketch"/>
    </div>                
  )
}

export {IntroPicture};

