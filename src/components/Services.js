import Link, { withPrefix } from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

const Services = async ({ images, intl }) => {
  const websiteItems = (await import(`../data/messages/${intl.locale}`))
    .services.websites.list;

  return (
    <div>
      <Helmet>
        <title>{intl.formatMessage({ id: 'services.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'services.desc' })}
        />
      </Helmet>

      <section id="banner" className="style2">
        <div className="inner">
          <header className="major">
            <FormattedMessage id="services.header" tagName="h1" />
          </header>
          <div className="content">
            <FormattedMessage id="services.desc" tagName="p" />
          </div>
        </div>
      </section>

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <FormattedMessage id="services.main.header" tagName="h2" />
            </header>

            <FormattedMessage id="services.main.desc" tagName="p" />

            <ul className="actions">
              <li>
                <Link to="#two" className="button scrolly">
                  <FormattedMessage id="services.main.cta" />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section id="two" className="spotlights services-two">
          <section id="websites">
            <div
              className="image"
              style={{ backgroundImage: `url(${images.websites})` }}
            />
            <div className="content">
              <div className="inner">
                <header className="major">
                  <FormattedMessage
                    id="services.websites.header"
                    tagName="h3"
                  />
                </header>
                <ul className="services-websites--list">
                  {Object.keys(websiteItems).map((item) => (
                    <li key={item}>{websiteItems[item]}</li>
                  ))}
                </ul>
                <FormattedMessage
                  id="services.websites.more.content"
                  tagName="p"
                  values={{
                    anchor: (
                      <FormattedMessage id="services.websites.more.anchor">
                        {(text) => (
                          <a href={withPrefix(`/${intl.locale}/#contact`)}>
                            {text}
                          </a>
                        )}
                      </FormattedMessage>
                    ),
                  }}
                />
              </div>
            </div>
          </section>

          <section id="apps">
            <div
              className="image"
              style={{ backgroundImage: `url(${images.mobileapps})` }}
            />
            <div className="content">
              <div className="inner">
                <header className="major">
                  <FormattedMessage id="services.apps.header" tagName="h3" />
                </header>
                <FormattedMessage id="services.apps.desc.p1" tagName="p" />
                <FormattedMessage id="services.apps.desc.p2" tagName="p" />
                <FormattedMessage id="services.apps.desc.p3" tagName="p" />
              </div>
            </div>
          </section>

          <section id="consulting">
            <div
              className="image"
              style={{ backgroundImage: `url(${images.consulting})` }}
            />
            <div className="content">
              <div className="inner">
                <header className="major">
                  <FormattedMessage
                    id="services.consulting.header"
                    tagName="h3"
                  />
                </header>
                <FormattedMessage id="services.consulting.desc" tagName="p" />
                <FormattedMessage
                  id="services.consulting.software.header"
                  tagName="h4"
                />
                <FormattedMessage
                  id="services.consulting.software.desc"
                  tagName="p"
                />
                <FormattedMessage
                  id="services.consulting.solutions.header"
                  tagName="h4"
                />
                <FormattedMessage
                  id="services.consulting.solutions.desc"
                  tagName="p"
                />
                <FormattedMessage
                  id="services.consulting.pm.header"
                  tagName="h4"
                />
                <FormattedMessage
                  id="services.consulting.pm.desc"
                  tagName="p"
                />
                <FormattedMessage
                  id="services.consulting.strategy.header"
                  tagName="h4"
                />
                <FormattedMessage
                  id="services.consulting.strategy.desc"
                  tagName="p"
                />
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

Services.propTypes = {
  images: PropTypes.shape({
    consulting: PropTypes.string.isRequired,
    mobileapps: PropTypes.string.isRequired,
    websites: PropTypes.string.isRequired,
  }).isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(Services);
