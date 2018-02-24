import PropTypes from 'prop-types';
import React from 'react';
import Service from '../components/Service';

const ServicePage = ({ data }) => {
  const getImageSrc = name => data[name].childImageSharp.responsiveResolution.src;

  const images = {
    consulting: getImageSrc('consulting'),
    mobileapps: getImageSrc('mobileapps'),
    websites: getImageSrc('websites'),
  };

  return <Service images={images} />;
};

ServicePage.propTypes = {
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

export default ServicePage;

export const pageQuery = graphql`
  query ServiceQuery {
    ...ServiceFragment
  }
`;
