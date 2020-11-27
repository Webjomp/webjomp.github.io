// eslint-disable-next-line import/prefer-default-export
export const getLangLongName = (langkey) => {
  const langLongName = {
    en: 'english',
    fr: 'français',
  };

  return langLongName[langkey];
};
