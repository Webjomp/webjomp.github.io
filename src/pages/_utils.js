export const getTileAttributes = () => [
  'moderne',
  'agile',
  'beton',
  'adaptatif',
  'clair',
  'abordable',
];

export const getLandingImages = (data) => {
  const getImageSrc = (name) => data[name].childImageSharp.fluid.src;
  const imageNames = ['banner', ...getTileAttributes()];

  return imageNames.reduce(
    (urls, imgName) => ({
      ...urls,
      [imgName]: getImageSrc(imgName),
    }),
    {},
  );
};
