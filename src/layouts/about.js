import PropTypes from 'prop-types';
import React from 'react';
import About from '../components/About';

const AboutPage = ({ data }) => (
  <About founderImg={data.file.childImageSharp.responsiveResolution.src} />
);

AboutPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        responsiveResolution: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    ...AboutFragment
  }
`;
