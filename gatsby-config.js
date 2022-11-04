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
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `László Békéssy | Intro, contact, portfolio`,
                short_name: `laszlo.bekessy.me`,
                description: `Intro, contact, and portfolio page for László Békéssy @borzos6`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#34AAE1`,
                display: `standalone`,
                icon: `src/images/profile/profile-rounded-800.webp`,
                icon_options: {
                    purpose: `any maskable`,
                },
                cache_busting_mode: `none`,
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
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: `
                    {
                        allSitePage {
                            nodes {
                                path
                            }
                        }
                    }
                `,
                resolveSiteUrl: () => `https://laszlo.bekessy.me`,
                resolvePages: ({ allSitePage: { nodes: allPages } }) => {
                    return allPages.map((page) => {
                        return { ...page };
                    });
                },
                serialize: ({ path, modifiedGmt }) => {
                    return {
                        url: path,
                        lastmod: modifiedGmt,
                    };
                },
            },
        },

        {
            resolve: `gatsby-plugin-offline`,
            options: {
                workboxConfig: {
                    globPatterns: [`**/icon-path*`],
                },
            },
        },
    ],
};
