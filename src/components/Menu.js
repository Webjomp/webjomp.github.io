import Link, { withPrefix } from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { getLangLongName } from '../data/utils';

const Menu = ({ langs, onToggleMenu }) => {
  let currentLang;

  const languageLinks = langs.map((lang) => {
    if (lang.selected) {
      currentLang = lang.langKey;
      return undefined;
    }

    const uniquePagesRedirection = {
      about: { fr: 'apropos' },
      apropos: { en: 'about' },
    };

    const getPageRegex = page => new RegExp(`(/\\w\\w/)${page}(/.*)?$`);

    const currentUniquePageKey = Object
      .keys(uniquePagesRedirection)
      .find(page => !!window.location.pathname.match(getPageRegex(page), 'gi'));

    return (
      <li key={lang.langKey}>
        <Link
          onClick={onToggleMenu}
          to={currentUniquePageKey
            ? lang.link.replace(getPageRegex(currentUniquePageKey), `$1${uniquePagesRedirection[currentUniquePageKey][lang.langKey]}$2`)
            : lang.link}
        >
          {getLangLongName(lang.langKey)}
        </Link>
      </li>
    );
  });

  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">
          <li>
            <Link onClick={onToggleMenu} to={withPrefix(`/${currentLang}/`)}>
              <FormattedMessage id="menu.home" />
            </Link>
          </li>
          <li>
            <FormattedMessage id="menu.about.page">
              {page => (
                <Link onClick={onToggleMenu} to={withPrefix(`/${currentLang}/${page}`)}>
                  <FormattedMessage id="menu.about.title" />
                </Link>
              )}
            </FormattedMessage>
          </li>
          <li>
            <FormattedMessage id="menu.services.page">
              {page => (
                <Link onClick={onToggleMenu} to={withPrefix(`/${currentLang}/${page}`)}>
                  <FormattedMessage id="menu.services.title" />
                </Link>
              )}
            </FormattedMessage>
          </li>
          <li>
            <Link onClick={onToggleMenu} to={withPrefix(`/${currentLang}/#contact`)}>
              <FormattedMessage id="menu.contact" />
            </Link>
          </li>
          {languageLinks}
        </ul>
      </div>
      <button className="close" onClick={onToggleMenu}>Close</button>
    </nav>
  );
};

Menu.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool,
    langKey: PropTypes.string,
  })).isRequired,
  onToggleMenu: PropTypes.func.isRequired,
};

export default Menu;
