import path from 'path'
import axios from 'axios'

export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
        template: 'src/pages/MainPage/MainPage.js',
      },
      {
        path: 'about',
        template: 'src/pages/AboutPage/AboutPage.js',
      },
    ]
  },
  plugins: [
    require.resolve('react-static-plugin-sass'),
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
