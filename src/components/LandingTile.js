import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const LandingTile = ({ attribute, imageUrl }) => (
  <article style={{ backgroundImage: `url(${imageUrl})` }}>
    <header className="major">
      <FormattedMessage id={`landing.tiles.${attribute}.title`} tagName="h3" />
      <FormattedMessage id={`landing.tiles.${attribute}.desc`} tagName="p" />
    </header>
  </article>
);

LandingTile.propTypes = {
  attribute: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default LandingTile;
