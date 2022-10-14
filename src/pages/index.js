import * as React from 'react';
import { Layout, Connect, PageFooter } from '../components';
import { Intro, Lead, Tech, Talent } from '../sections';
import { Divider } from '../components';

const IndexPage = () => {
    return (
        <Layout>
            <Intro />
            <Divider text="and this is what I do" />
            <Lead />
            <div className="pt-6"></div>
            <Tech />
            <div className="pt-6"></div>
            <Talent />
            <Divider text="let's connect" />
            <Connect />
            <Divider />
            <PageFooter />
        </Layout>
    );
};

export const Head = () => <title>FIXME SEO</title>;

export default IndexPage;
