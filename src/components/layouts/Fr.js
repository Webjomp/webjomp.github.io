import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import '@formatjs/intl-pluralrules/locale-data/fr';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/fr';
import '@formatjs/intl-relativetimeformat/polyfill';
import 'intl';

import messages from '../../data/messages/fr';
import Layout from './Layout';

const Fr = (props) => (
  <StaticQuery
    query={graphql`
      query LayoutFrQuery {
        site {
          siteMetadata {
            languages {
              defaultLangKey
              langs
            }
          }
        }
      }
    `}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(data) => <Layout {...props} data={data} i18nMessages={messages} />}
  />
);

Fr.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string,
  }).isRequired,
};

export default Fr;
