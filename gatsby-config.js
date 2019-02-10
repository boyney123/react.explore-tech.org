module.exports = {
  siteMetadata: {
    /***
     * Title of the website
     */
    title: 'react.explore-tech.org',
    /**
     * Name of the resource
     */
    content: 'React',
    /**
     * Description
     */
    description:
      'An open source list to help developers learn & explore React.',
    /**
     * Url when clicking contribute button
     */
    contributionUrl: '',

    categories: {
      Components: {
        subtitle:
          'List of React components to help you with almost anything, check them out for inspiration.',
      },
      Forms: {
        subtitle:
          'Checkout what tools, techniques have been developed to handle Forms.',
      },
      Tutorials: {
        subtitle:
          'Learn React from the ground up with some of the best tutorials online. A collection of tutorials from all over the web to help you on your React journey. ',
      },
      Styles: {
        subtitle:
          'CSS in JS? JS > CSS, CSS > JS? Who knows? Find out what people are building here!',
      },
      Boilerplates: {
        subtitle:
          'Get up and running as fast as possible. Checkout these boilerplates.',
      },
      Testing: {
        subtitle: 'Checkout how to test React, all the resources listed.',
      },
      Tools: {
        subtitle:
          'You might want to checkout some React tools to help your development workflows',
      },
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/github.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'REPLACE',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/materials`,
        name: 'materials',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
