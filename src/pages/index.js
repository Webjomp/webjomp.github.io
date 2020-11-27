import { withPrefix } from 'gatsby-link';
import PropTypes from 'prop-types';
import { getUserLangKey } from 'ptz-i18n';
import React from 'react';

class RedirectIndex extends React.PureComponent {
  constructor(props) {
    super(props);

    // Skip build, Browsers only
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
      const langKey = getUserLangKey(langs, defaultLangKey);
      const homeUrl = withPrefix(`/${langKey}/`);

      window.___history.replace(homeUrl + window.___history.location.hash); // eslint-disable-line no-underscore-dangle
    }
  }

  render() {
    return <div />;
  }
}

RedirectIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        languages: PropTypes.shape({
          langs: PropTypes.arrayOf(PropTypes.string).isRequired,
          defaultLangKey: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default RedirectIndex;
