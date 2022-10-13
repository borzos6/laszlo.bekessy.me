import * as React from 'react'
import {Content, Hero, Footer, Container, Image} from 'react-bulma-components';
import {watercolor4Sketch} from '../../images'
import {footer, background} from './styles.module.scss'

const PageFooter = () => {
  return (
    <Hero size="small" className={footer}>
        <Image src={watercolor4Sketch} className={background}/>
        <Hero.Footer>
          <Footer>
            
            <Container>
              <Content className='has-text-centered'>
                <p>
                  Made by László Békéssy. The source code is licensed under
                  <a href="http://opensource.org/licenses/mit-license.php" className='has-text-weight-bold'>
                    {' '}
                    MIT
                  <br/>
                  </a>
                  . The website content is licensed{' '}
                  <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" className='has-text-weight-bold'>
                    CC BY NC SA 4.0
                  </a>
                  . 
                  <br/>
                  Follow the link for the{' '}
                  <a href="http://github.com/borzos6/laszlo.bekessy.me/" className='has-text-weight-bold'>
                    Source Code
                  </a>.
                </p>
              </Content>
              
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
  )
}

export {PageFooter};