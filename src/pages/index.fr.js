import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Landing from '../components/Landing';
import Fr from '../components/layouts/Fr';
import { getLandingImages } from './_utils';

const HomeIndexFr = ({ data, location }) => {
  const imageUrls = getLandingImages(data);

  return (
    <Fr location={location}>
      <Landing
        metaTitle={JSON.parse(data.site.siteMetadata.title).fr}
        metaDescription={JSON.parse(data.site.siteMetadata.description).fr}
        imageUrls={imageUrls}
      />
    </Fr>
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string,
  }).isRequired,
};

export default HomeIndexFr;

export const pageQuery = graphql`
  query IndexFrQuery {
    ...Landing
  }
`;
