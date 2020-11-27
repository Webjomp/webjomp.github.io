import PropTypes from 'prop-types';
import React from 'react';

import Landing from '../components/Landing';
import { getLandingImages } from './_utils';

const HomeIndexFr = ({ data }) => {
  const imageUrls = getLandingImages(data);

  return (
    <Landing
      metaTitle={JSON.parse(data.site.siteMetadata.title).fr}
      metaDescription={JSON.parse(data.site.siteMetadata.description).fr}
      imageUrls={imageUrls}
    />
  );
};

HomeIndexFr.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default HomeIndexFr;

export const pageQuery = graphql`
  query IndexFrQuery {
    ...Landing
  }
`;
