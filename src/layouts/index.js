import 'intl';

import flatJson from 'flat';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

import '../assets/scss/main.scss';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

class Template extends Component {
  static navigateToHash() {
    const href = window.___history.location.hash; // eslint-disable-line no-underscore-dangle

    if (href) {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView();
      }
    }
  }

  static setScrollyButtons() {
    const button = $('.scrolly');

    button.on('click', () => {
      const heightToScroll = $(`#${button[0].href.split('#')[1]}`).offset().top - $('#header').height();

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
    Template.navigateToHash();
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  render() {
    const { children, data, i18nMessages, location } = this.props;
    const url = location.pathname;
    const { defaultLangKey, langs } = data.site.siteMetadata.languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

    return (
      <IntlProvider locale={langKey} key={langKey} messages={flatJson(i18nMessages)}>
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
          <div id="wrapper">
            <Header onToggleMenu={this.handleToggleMenu} />
            {children({ ...this.props })}
            <Footer />
          </div>
          <Menu onToggleMenu={this.handleToggleMenu} langs={langsMenu} />
        </div>
      </IntlProvider>
    );
  }
}

Template.propTypes = {
  children: PropTypes.func.isRequired,
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
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

export default Template;

export const imageNarrowFragment = graphql`
  fragment ImageNarrow on File {
    childImageSharp {
      responsiveResolution(width: 600, quality: 90) {
        src
      }
    }
  }
`;

export const imageWideFragment = graphql`
  fragment ImageWide on File {
    childImageSharp {
      responsiveResolution(width: 900, quality: 90) {
        src
      }
    }
  }
`;

export const serviceImageFragment = graphql`
  fragment ServiceImage on File {
    childImageSharp {
      responsiveResolution(width: 980, quality: 80) {
        src
      }
    }
  }
`;

export const landingFragment = graphql`
  fragment Landing on RootQueryType {
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
        responsiveResolution(width: 1920, quality: 40) {
          src
        }
      }
    }
  }
`;
