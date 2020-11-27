import { withPrefix } from 'gatsby-link';
import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

const Footer = ({ intl }) => (
  <footer id="footer">
    <div
      className="inner"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <div>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/fxlemire"
              className="icon alt fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/webjomp/"
              className="icon alt fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/fxlemire"
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fxlemire/"
              className="icon alt fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Webjomp 2018</li>
        </ul>
      </div>
      <div>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <a
              style={{ borderBottom: 'none' }}
              href={withPrefix(`/${intl.locale}/`)}
            >
              <FormattedMessage id="menu.home" />
            </a>
          </li>
          <li>
            <FormattedMessage id="menu.about.page">
              {(page) => (
                <a
                  style={{ borderBottom: 'none' }}
                  href={withPrefix(`/${intl.locale}/${page}`)}
                >
                  <FormattedMessage id="menu.about.title" />
                </a>
              )}
            </FormattedMessage>
          </li>
          <li>
            <FormattedMessage id="menu.services.page">
              {(page) => (
                <a
                  style={{ borderBottom: 'none' }}
                  href={withPrefix(`/${intl.locale}/${page}`)}
                >
                  <FormattedMessage id="menu.services.title" />
                </a>
              )}
            </FormattedMessage>
          </li>
          <li>
            <a
              style={{ borderBottom: 'none' }}
              href={withPrefix(`/${intl.locale}/#contact`)}
            >
              <FormattedMessage id="menu.contact" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
