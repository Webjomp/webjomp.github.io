import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const Banner = ({ background }) => (
  <section id="banner" className="major" style={{ backgroundImage: `url(${background})` }}>
    <div className="inner">
      <header className="major">
        <FormattedMessage id="banner.header.default">
          {text => (
            <h1>
              {text}
              <FormattedMessage id="banner.header.span">
                {spanText => <span className="accent-wj fade-in">{spanText}</span>}
              </FormattedMessage>
            </h1>
          )}
        </FormattedMessage>
      </header>
      <div className="content">
        <p>
          <FormattedMessage id="banner.desc.line1" />
          <FormattedMessage id="banner.desc.line2">
            {text => text !== 'banner.desc.line2' && (<span><br />{text}</span>)}
          </FormattedMessage>
        </p>
        <ul className="actions">
          <li><a href="#main" className="button next scrolly"><FormattedMessage id="banner.cta" /></a></li>
        </ul>
      </div>
    </div>
  </section>
);

Banner.propTypes = {
  background: PropTypes.string.isRequired,
};

export default Banner;
