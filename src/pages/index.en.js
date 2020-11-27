import PropTypes from 'prop-types';
import React from 'react';

import Landing from '../components/Landing';
import { getLandingImages } from './_utils';

const HomeIndexEn = ({ data }) => {
  const imageUrls = getLandingImages(data);

  return (
    <Landing
      metaTitle={JSON.parse(data.site.siteMetadata.title).en}
      metaDescription={JSON.parse(data.site.siteMetadata.description).en}
      imageUrls={imageUrls}
    />
  );
};

HomeIndexEn.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default HomeIndexEn;

export const pageQuery = graphql`
  query IndexEnQuery {
    ...Landing
  }
`;
