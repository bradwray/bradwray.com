module.exports = {
  siteMetadata: {
    title: `Brad Wray`,
    description: `ideas nerd, psych & comp sci teacher, creator of http://xamplr.com , ReactJS developer, edTech entrepreneur, gardener, musician, dad.`,
    author: `@bradwray`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brad Wray`,
        short_name: `bradwray`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
