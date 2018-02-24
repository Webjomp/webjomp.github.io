import PropTypes from 'prop-types';
import React from 'react';
import Services from '../components/Services';

const ServicesPage = ({ data }) => {
  const getImageSrc = name => data[name].childImageSharp.responsiveResolution.src;

  const images = {
    consulting: getImageSrc('consulting'),
    mobileapps: getImageSrc('mobileapps'),
    websites: getImageSrc('websites'),
  };

  return <Services images={images} />;
};

ServicesPage.propTypes = {
  data: PropTypes.objectOf( // eslint-disable-line function-paren-newline
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        responsiveResolution: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired, // eslint-disable-line function-paren-newline
};

export default ServicesPage;

export const serviceImageFragment = graphql`
  fragment ServiceImage on File {
    childImageSharp {
      responsiveResolution(width: 980, quality: 80) {
        src
      }
    }
  }
`;

export const pageQuery = graphql`
  query ServicesQuery {
    websites: file(relativePath: { eq: "services-site-web.png" }) {
      ...ServiceImage
    }
    mobileapps: file(relativePath: { eq: "mobile-app.jpg" }) {
      ...ServiceImage
    }
    consulting: file(relativePath: { eq: "consulting.jpg" }) {
      ...ServiceImage
    }
  }
`;
