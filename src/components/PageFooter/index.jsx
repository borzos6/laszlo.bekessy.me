import * as React from 'react';
import { Content, Hero, Footer, Container, Image } from 'react-bulma-components';
import { watercolor4Sketch } from '../../images';
import * as styles from './styles.module.scss';

const PageFooter = () => {
    return (
        <Hero size="small" className={styles.footer}>
            <Image src={watercolor4Sketch} className={styles.background} />
            <Hero.Footer>
                <Footer>
                    <Container>
                        <Content className="has-text-centered">
                            <p>
                                Made by László Békéssy. The source code is licensed under
                                <a
                                    href="http://opensource.org/licenses/mit-license.php"
                                    className="has-text-weight-bold has-text-info">
                                    {' '}
                                    MIT
                                    <br />
                                </a>
                                . The website content is licensed{' '}
                                <a
                                    href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                                    className="has-text-weight-bold has-text-info">
                                    CC BY NC SA 4.0
                                </a>
                                .
                                <br />
                                Follow the link for the{' '}
                                <a
                                    href="http://github.com/borzos6/laszlo.bekessy.me/"
                                    className="has-text-weight-bold has-text-info">
                                    Source Code
                                </a>
                                .
                            </p>
                        </Content>
                    </Container>
                </Footer>
            </Hero.Footer>
        </Hero>
    );
};

export { PageFooter };
