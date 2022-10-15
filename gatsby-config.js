module.exports = {
    siteMetadata: {
        title: `László Békéssy | Intro, contact, portfolio`,
        description: `Intro, contact, and portfolio page for László Békéssy @borzos6`,
        siteUrl: `https://laszlo.bekessy.me`,
        schema: {
            name: `László Békéssy`,
            email: `laszlo@bekessy.me`,
        },
    },
    plugins: [
        // STYLE PROCESSING
        `gatsby-plugin-sass`,

        // SEO & TRACKING PLUGINS
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-141698457-2`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `László Békéssy | Intro, contact, portfolio`,
                short_name: `laszlo.bekessy.me`,
                background_color: `#fff`,
                theme_color: `#0057AE`,
                display: `minimal-ui`,
                icon: `src/images/favicon/favicon-32x32.png`,
            },
        },

        // SOURCE PLUGINS
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },

        // TRANSFORMERS
        `gatsby-transformer-json`,

        // GENERAL
        `gatsby-plugin-offline`,
    ],
};
