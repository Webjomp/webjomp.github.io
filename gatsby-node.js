exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /material-design-lite|slick-carousel/,
      loader: 'null-loader',
    });
  }
};
