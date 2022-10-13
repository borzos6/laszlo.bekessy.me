import * as React from 'react'
import PropTypes from 'prop-types';
import {Content, Card, Media, Image, Heading, Container} from 'react-bulma-components';
import {footer, wrapper} from './styles.module.scss'

const TestimonialCard = ({name, thumbnail, date, oneliner, children}) => {
  return (
    <Card className={wrapper}>
      <Card.Header>      
        <p className="card-header-title has-text-primary">„ {oneliner} ”</p>
      </Card.Header>
      <Card.Content>
        <Content size="small">
          {children}
        </Content>
        <Media className={footer}>
          <Media.Item renderAs="figure" align="left">
            <Image size={128} alt="avatar 64x64" src={thumbnail} rounded={true}/>
          </Media.Item>
          <Media.Item className='is-centered'>
            <Heading size={4}>{name}</Heading>
            <Heading subtitle size={6}>
              <time dateTime={date}>{date}</time>
            </Heading>
          </Media.Item>
        </Media>
      </Card.Content>
    </Card>
  )
}

TestimonialCard.propTypes = {
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    date: PropTypes.string,
    oneliner: PropTypes.string,
};


export {TestimonialCard};

