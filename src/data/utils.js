export const getLangLongName = (langkey) => {
  // eslint-disable-line import/prefer-default-export
  const langLongName = {
    en: 'english',
    fr: 'français',
  };

  return langLongName[langkey];
};
