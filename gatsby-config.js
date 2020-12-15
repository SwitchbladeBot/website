module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-layout",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'inter',
          'montserrat',
          'poppins'
        ],
        display: 'swap'
      }
    }
  ],
};
