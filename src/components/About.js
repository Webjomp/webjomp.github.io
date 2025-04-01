import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

const About = ({ founderImg }) => (
  <div id="about">
    <FormattedMessage id="about.title">
      {title => <Helmet><title>{title}</title></Helmet>}
    </FormattedMessage>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <FormattedMessage id="about.title" tagName="h1" />
          </header>
          <span className="image left">
            <img src={founderImg} alt="François-Xavier Lemire" />
          </span>
          <FormattedMessage
            id="about.desc.1"
            tagName="p"
            values={{ lla: <a href="http://www.lemireavocat.com">Lemire Lemire avocats, s.e.n.c.</a> }}
          />
          <FormattedMessage
            id="about.desc.2"
            tagName="p"
            values={{
              fintech: (<i>FinTech</i>),
              morgan: (<a href="http://www.morganstanley.com/">Morgan Stanley</a>),
              skylanders: (<i>Skylanders : SuperChargers</i>),
              beenox: (<a href="http://beenox.com/">Activision</a>),
              vungle: (<a href="https://vungle.com/">Vungle</a>),
            }}
          />
          <FormattedMessage id="about.desc.3" tagName="p" />
          <FormattedMessage id="about.desc.4" tagName="p" />

          <ul className="icons inline">
            <li>
              <a href="https://twitter.com/fxlemire" className="icon alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/fxlemire/" className="icon alt fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/fxlemire" className="icon alt fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
);

About.propTypes = {
  founderImg: PropTypes.string.isRequired,
};

export default About;
