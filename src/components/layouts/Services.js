import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Services from '../Services';

const ServicesPage = () => {
  const getImages = (data) => {
    const getImageSrc = (name) => data[name].childImageSharp.fluid.src;

    const images = {
      consulting: getImageSrc('consulting'),
      mobileapps: getImageSrc('mobileapps'),
      websites: getImageSrc('websites'),
    };

    return images;
  };

  return (
    <StaticQuery
      query={graphql`
        fragment ServiceImage on File {
          childImageSharp {
            fluid(maxWidth: 980, quality: 80) {
              src
            }
          }
        }
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
      `}
      render={(data) => <Services images={getImages(data)} />}
    />
  );
};

export default ServicesPage;
