import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick';

import { withPrefix } from 'gatsby-link';
import $ from 'jquery';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import { getTileAttributes } from '../pages/_utils';
import Banner from './Banner';
import Contact from './Contact';
import LandingService from './LandingService';
import LandingTile from './LandingTile';

import aaiard from '../assets/images/aaiard.png';
import eprintit from '../assets/images/eprintit.svg';
import evolvingweb from '../assets/images/evolvingweb.svg';
import kopi from '../assets/images/kopi.png';
import seahub from '../assets/images/seahub.svg';
import t10labs from '../assets/images/t10labs.png';

class HomeIndex extends React.Component {
  componentDidMount() {
    $('.clients-carousel').slick({
      arrows: false,
      autoplay: true,
      centerMode: true,
      centerPadding: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
    });
  }

  render() {
    const { intl, metaTitle, metaDescription, imageUrls } = this.props;
    const services = [
      { name: 'websites', icon: 'fa-globe' },
      { name: 'apps', icon: 'fa-mobile' },
      { name: 'consulting', icon: 'fa-briefcase' },
    ];
    const tileAttributes = getTileAttributes();

    return (
      <div>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>

        <Banner background={imageUrls.banner} />

        <div id="main">
          <section id="one" className="tiles">
            {tileAttributes.map((attribute) => (
              <LandingTile
                key={attribute}
                attribute={attribute}
                imageUrl={imageUrls[attribute]}
              />
            ))}
          </section>

          <section id="two">
            <div className="inner">
              <header
                className="major"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: 'auto',
                }}
              >
                <FormattedMessage id="landing.services.title">
                  {(text) => <h2 style={{ width: 'auto' }}>{text}</h2>}
                </FormattedMessage>
              </header>

              <div className="services">
                {services.map((service) => (
                  <LandingService
                    key={service.name}
                    name={service.name}
                    icon={service.icon}
                  />
                ))}
              </div>

              <ul
                className="actions"
                style={{ paddingTop: '3em', textAlign: 'center' }}
              >
                <li>
                  <a
                    href={withPrefix(`${intl.locale}/services`)}
                    className="button next"
                  >
                    <FormattedMessage id="landing.services.cta" />
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section id="three" style={{ paddingBottom: '1em' }}>
            <div className="inner">
              <header
                className="major"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: 'auto',
                }}
              >
                <FormattedMessage id="landing.clients.title">
                  {(text) => <h2 style={{ width: 'auto' }}>{text}</h2>}
                </FormattedMessage>
              </header>
              <div className="clients-carousel">
                <div>
                  <img
                    style={{ margin: '0 auto', height: '4em' }}
                    src={aaiard}
                    alt="AAIARD"
                  />
                </div>
                <div>
                  <img
                    style={{ margin: '0 auto', height: '4em' }}
                    src={eprintit}
                    alt="ePRINTit"
                  />
                </div>
                <div>
                  <img
                    style={{ margin: '0 auto', height: '4em' }}
                    src={evolvingweb}
                    alt="Evolving Web"
                  />
                </div>
                <div>
                  <img
                    style={{ margin: '0 auto', height: '4em' }}
                    src={kopi}
                    alt="KOPI"
                  />
                </div>
                <div>
                  <img
                    style={{ margin: '0 auto', height: '4em' }}
                    src={seahub}
                    alt="SeaHub"
                  />
                </div>
                <div>
                  <img
                    style={{ margin: '0 auto', height: '4em' }}
                    src={t10labs}
                    alt="Tower10 Labs"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <Contact />
      </div>
    );
  }
}

HomeIndex.propTypes = {
  intl: intlShape.isRequired,
  metaTitle: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  imageUrls: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectIntl(HomeIndex);
