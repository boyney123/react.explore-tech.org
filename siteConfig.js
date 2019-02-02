import logo from './src/icons/react.svg'
import tutorial from './src/icons/tutorial.svg'
import form from './src/icons/form.svg'
import page from './src/icons/page.svg'
import bricks from './src/icons/bricks.svg'
import hammer from './src/icons/hammer.svg'

export default {
  /***
   * Title of the website
   */
  title: 'react.openlist.io',
  /**
   * Logo to use on the site
   */
  logo: logo,
  /**
   * Name of the resource
   */
  content: 'React',
  /**
   * Description
   */
  description:
    'An open source list to help developers learn, explore and create React applications.',
  /**
   * Url when clicking contribute button
   */
  contributionUrl: '',

  categories: {
    Components: {
      icon: bricks,
      subtitle:
        'List of React components to help you with almost anything, check them out for inspiration.',
    },
    Forms: {
      icon: form,
      subtitle:
        'Checkout what tools, techniques have been developed to handle Forms.',
    },
    Tutorials: {
      icon: tutorial,
      subtitle:
        'Learn React from the ground up with some of the best tutorials online. A collection of tutorials from all over the web to help you on your React journey. ',
    },
    Styles: {
      icon: page,
      subtitle:
        'CSS in JS? JS > CSS, CSS > JS? Who knows? Find out what people are building here!',
    },
    Boilerplates: {
      icon: hammer,
      subtitle:
        'Get up and running as fast as possible. Checkout these boilerplates.',
    },
  },
}
