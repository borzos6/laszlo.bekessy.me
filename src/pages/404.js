import React from 'react';
import { Layout } from '../components';
import { Link } from 'gatsby';

const NotFound = () => {
    return (
        <Layout>
            <h1>Well, this page doesn't exist</h1>
            <p>
                <Link to="/">Let's go back to the main page.</Link>
            </p>
        </Layout>
    );
};

export default NotFound;
