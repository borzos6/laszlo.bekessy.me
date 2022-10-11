module.exports = {
  siteMetadata: {
    title: `laszlo.bekessy.me`,
    siteUrl: `https://laszlo.bekessy.me`
  },
  plugins: [
    // SYLE PROCESSING
    `gatsby-plugin-sass`,

    // SEO & TRACKING PLUGINS
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-141698457-2`
      }
    },

    // SOURCE PLUGINS
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      }
    },

    // TRANSFORMERS
    `gatsby-transformer-json`,
  ]
};