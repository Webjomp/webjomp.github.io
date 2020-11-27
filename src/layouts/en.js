import React from 'react';

import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/polyfill';
import 'intl';

import messages from '../data/messages/en';
import Layout from './index';

// eslint-disable-next-line react/jsx-props-no-spreading
export default (props) => <Layout {...props} i18nMessages={messages} />;

export const pageQuery = graphql`
  query LayoutEnQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
