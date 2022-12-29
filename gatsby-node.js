const { defaultLangKey } = require('./src/data/languages');

exports.onCreateWebpackConfig = ({ stage, loaders }) => {
  if (stage === 'build-html') {
    loaders.setWebpackConfig({
      module: {
        rules: [
          {
            test: /material-design-lite|slick-carousel/,
            use: ['null-loader'],
          },
        ],
      },
    });
  }
};

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/`,
    toPath: `/${defaultLangKey}`,
    redirectInBrowser: true,
    isPermanent: false,
  });
};
