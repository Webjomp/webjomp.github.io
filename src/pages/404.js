import React from 'react';
import { withPrefix } from 'gatsby-link';
import { injectIntl, intlShape } from 'react-intl';

const NotFoundPage = ({ intl }) => (
  <div
    style={{
      padding: '4em 0 2em 0',
      margin: '0 auto',
      maxWidth: '65em',
      width: 'calc(100% - 6em)',
    }}
  >
    <h1>Oops! ¯\_(ツ)_/¯</h1>
    <p
      style={{
        minHeight: '7vh',
        marginTop: '3em',
        fontSize: '2em',
      }}
    >
      Back to <a href={withPrefix(`/${intl.locale}/`)}>Webjomp</a>
    </p>
  </div>
);

NotFoundPage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(NotFoundPage);
