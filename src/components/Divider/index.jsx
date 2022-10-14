import * as React from 'react';
import PropTypes from 'prop-types';
import * as syles from './styles.module.scss';

const Divider = (props) => {
    return <div className={`${syles.divider} ${props.text ? syles.withText : ''}`}>{props.text}</div>;
};

Divider.propTypes = {
    text: PropTypes.string,
};

export { Divider };
