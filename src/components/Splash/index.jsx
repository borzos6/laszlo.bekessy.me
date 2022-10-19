import * as React from 'react';
import { Image } from 'react-bulma-components';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

const Splash = (props) => {
    return (
        <div className={`${props.isLeft ? styles.containerLeft : styles.containerRight} has-text-centered`}>
            <Image
                src={props.imageSrc}
                className={`${styles.splash} image`}
                size={props.size}
                alt="Watercolor splash"
            />
            <h1 className={`${styles.sentence}`}>{props.sentence}</h1>
        </div>
    );
};

Splash.propTypes = {
    isLeft: PropTypes.bool,
    sentence: PropTypes.string,
    imageSrc: PropTypes.string,
    size: PropTypes.string,
};

export { Splash };
