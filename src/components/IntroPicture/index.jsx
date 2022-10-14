import * as React from 'react';
import { Image } from 'react-bulma-components';
import { profilePicture, globe1Sketch, globe2Sketch } from '../../images';
import * as syles from './styles.module.scss';

const IntroPicture = () => {
    return (
        <div className={syles.container}>
            <Image src={profilePicture} className={`${syles.profile} ${syles.picture}`} alt="Profile" />
            <Image src={globe1Sketch} className={`${syles.sketch} ${syles.picture}`} alt="Sketch" />
            <Image src={globe2Sketch} className={`${syles.sketch} ${syles.picture}`} alt="Sketch" />
        </div>
    );
};

export { IntroPicture };
