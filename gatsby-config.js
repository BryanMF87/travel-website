/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/travel-website",
  siteMetadata: {
    title: 'gatsby website',
    siteUrl: `https://www.bryanfink.dev`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-omni-font-loader`,
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/mountain-solid.svg",
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Cardo`,
            file: `https://fonts.googleapis.com/css2?family=Cardo:wght@700&display=swap`
          },
          {
            name: `Lato`,
            file: `https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&display=swap`
          }
        ],
      },
    },
  ],
}
