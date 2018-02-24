import 'intl';

import React from 'react';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import messages from '../data/messages/en';
import Layout from './index';

addLocaleData(en);

export default props => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
);

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
