import * as React from 'react'
import {Image} from 'react-bulma-components';
import {officeSketch, profilePicture} from '../../images'
import {profile, sketch, picture, container} from './IntroPicture.module.scss'

const IntroPicture = () => {
  return (
    <div className={container}>
        <Image src={profilePicture} className={`${profile} ${picture}`} alt="Profile"/>
        <Image src={officeSketch} className={`${sketch} ${picture}`} alt="Sketch"/>
    </div>                
  )
}

export {IntroPicture};




