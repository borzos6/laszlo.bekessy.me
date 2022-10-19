import * as React from 'react';
import { Image } from 'react-bulma-components';
import { standingProfilePicture, globe1Sketch, globe2Sketch } from '../../images';
import * as syles from './styles.module.scss';

const IntroPicture = () => {
    return (
        <div className={syles.container}>
            <Image src={standingProfilePicture} className={`${syles.profile} ${syles.picture}`} alt="Profile" />
            <Image
                src={globe1Sketch}
                className={`${syles.sketch} ${syles.picture}`}
                alt="Tech globe sketch 1st layer"
            />
            <Image
                src={globe2Sketch}
                className={`${syles.sketch} ${syles.picture}`}
                alt="Tech globe sketch 2nd layer"
            />
        </div>
    );
};

export { IntroPicture };
