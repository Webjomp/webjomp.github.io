import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Landing from '../components/Landing';
import En from '../components/layouts/En';
import { getLandingImages } from './_utils';

const HomeIndexEn = ({ data, location }) => {
  const imageUrls = getLandingImages(data);

  return (
    <En location={location}>
      <Landing
        metaTitle={JSON.parse(data.site.siteMetadata.title).en}
        metaDescription={JSON.parse(data.site.siteMetadata.description).en}
        imageUrls={imageUrls}
      />
    </En>
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string,
  }).isRequired,
};

export default HomeIndexEn;

export const pageQuery = graphql`
  query IndexEnQuery {
    ...Landing
  }
`;
