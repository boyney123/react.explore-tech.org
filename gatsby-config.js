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
        subtitle: 'List of React components',
      },
      Forms: {
        subtitle: 'Hands on with Forms',
      },
      Data: {
        subtitle: 'Managing data with React',
      },
      Tutorials: {
        subtitle: 'Learn all things React',
      },
      DevExperience: {
        subtitle: 'React developer experience',
      },
      Redux: {
        subtitle: 'All things Redux',
      },
      Styles: {
        subtitle: 'Making your project look great',
      },
      Boilerplates: {
        subtitle: 'Get setup within minutes',
      },
      Testing: {
        subtitle: 'List of tools to help testing',
      },
      Tools: {
        subtitle: 'Level up your React with tools',
      },
      Routing: {
        subtitle: 'Routing with React',
      },
      Libraries: {
        subtitle: 'Integrate with great libraries',
      },
      Examples: {
        subtitle: 'Explore example applications',
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
        trackingId: 'UA-133219838-2',
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
