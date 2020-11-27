const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.webjomp.com',
    title: JSON.stringify({
      en: 'Webjomp - The web, reimagined',
      fr: 'Webjomp - Le web, repensé',
    }),
    author: 'Webjomp',
    description: JSON.stringify({
      en:
        'New on the market of website design, Webjomp invests in its relationship with the client ' +
        "and offers the industry's best practices",
      fr:
        'Nouvelle sur le marché de la conception de sites Web, Webjomp investit dans sa relation client ' +
        "et propose les meilleures pratiques établies par l'industrie.",
    }),
    languages,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-73479304-1',
        head: true,
        anonymize: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
  ],
};
