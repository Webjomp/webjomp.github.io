import { withPrefix } from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

const LandingService = ({ icon, intl, name }) => (
  <a className="service" href={withPrefix(`${intl.locale}/services#${name}`)}>
    <i className={`icon fa fa-3x ${icon}`} />
    <FormattedMessage id={`landing.services.${name}`} tagName="h3" />
  </a>
);


LandingService.propTypes = {
  icon: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  name: PropTypes.string.isRequired,
};

export default injectIntl(LandingService);
