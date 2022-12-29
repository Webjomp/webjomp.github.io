import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import About from '../About';

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        file(relativePath: { eq: "fx.png" }) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    `}
    render={(data) => (
      <About founderImg={data.file.childImageSharp.fluid.src} />
    )}
  />
);

export default AboutPage;
