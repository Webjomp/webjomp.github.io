import 'intl';

import React from 'react';
import { addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';

import messages from '../data/messages/fr';
import Layout from './index';

addLocaleData(fr);

export default (props) => <Layout {...props} i18nMessages={messages} />;

export const pageQuery = graphql`
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
`;
