import { flatten } from 'flat';
import { StaticQuery, graphql } from 'gatsby';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

import Footer from '../Footer';
import Header from '../Header';
import Menu from '../Menu';

import '../../assets/scss/main.scss';

class Template extends Component {
  static setScrollyButtons() {
    const button = $('.scrolly');

    button.on('click', () => {
      const heightToScroll =
        $(`#${button[0].href.split('#')[1]}`).offset().top -
        $('#header').height();

      $('html, body').animate({ scrollTop: heightToScroll }, 1200);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentDidUpdate() {
    Template.setScrollyButtons();
    this.navigateToHash();
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    const { isMenuVisible } = this.state;

    this.setState({
      isMenuVisible: !isMenuVisible,
    });
  }

  navigateToHash() {
    const { location } = this.props;
    const href = location.hash;

    if (href) {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView();
        window.scrollBy(0, -$('#header').height() + 1);
      }
    }
  }

  render() {
    const { children, data, i18nMessages, location } = this.props;
    const { isMenuVisible, loading } = this.state;
    const url = location.pathname;
    const { defaultLangKey, langs } = data.site.siteMetadata.languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

    return (
      <IntlProvider
        locale={langKey}
        key={langKey}
        messages={flatten(i18nMessages)}
      >
        <StaticQuery
          query={graphql`
            fragment ImageNarrow on File {
              childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                  src
                }
              }
            }
            fragment ImageWide on File {
              childImageSharp {
                fluid(maxWidth: 900, quality: 90) {
                  src
                }
              }
            }
            fragment Landing on Query {
              site {
                siteMetadata {
                  title
                  description
                }
              }
              moderne: file(relativePath: { eq: "moderne.jpg" }) {
                ...ImageNarrow
              }
              agile: file(relativePath: { eq: "agile.jpg" }) {
                ...ImageWide
              }
              beton: file(relativePath: { eq: "beton.jpg" }) {
                ...ImageNarrow
              }
              adaptatif: file(relativePath: { eq: "adaptatif.jpg" }) {
                ...ImageWide
              }
              clair: file(relativePath: { eq: "clair.jpg" }) {
                ...ImageNarrow
              }
              abordable: file(relativePath: { eq: "abordable.jpg" }) {
                ...ImageWide
              }
              banner: file(relativePath: { eq: "banner-webjomp.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 40) {
                    src
                  }
                }
              }
            }
          `}
          render={() => (
            <div
              className={`body ${loading} ${
                isMenuVisible ? 'is-menu-visible' : ''
              }`}
            >
              <div id="wrapper">
                <Header onToggleMenu={this.handleToggleMenu} />
                {children}
                <Footer />
              </div>
              <Menu onToggleMenu={this.handleToggleMenu} langs={langsMenu} />
            </div>
          )}
        />
      </IntlProvider>
    );
  }
}

Template.propTypes = {
  children: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        languages: PropTypes.shape({
          langs: PropTypes.arrayOf(PropTypes.string).isRequired,
          defaultLangKey: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  i18nMessages: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string,
  }).isRequired,
};

export default Template;
