import * as React from 'react';
import PropTypes from 'prop-types';
import { Content, Card, Media, Image, Heading } from 'react-bulma-components';
import * as styles from './styles.module.scss';

const TestimonialCard = (props) => {
    return (
        <Card className={styles.wrapper}>
            <Card.Header>
                <p className={`card-header-title has-text-primary has-text-centered ${styles.centered}`}>
                    {props.oneliner}
                </p>
            </Card.Header>
            <Card.Content>
                <Content size="small">{props.children}</Content>
                <Media className={styles.footer}>
                    <Media.Item renderAs="figure" align="left">
                        <Image size={128} alt="avatar 64x64" src={props.thumbnail} rounded={true} />
                    </Media.Item>
                    <Media.Item>
                        <Heading size={5}>{props.name}</Heading>
                        <Heading subtitle size={6}>
                            <time dateTime={props.date}>{props.date}</time>
                        </Heading>
                    </Media.Item>
                </Media>
            </Card.Content>
        </Card>
    );
};

TestimonialCard.propTypes = {
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    date: PropTypes.string,
    oneliner: PropTypes.string,
};

export { TestimonialCard };
