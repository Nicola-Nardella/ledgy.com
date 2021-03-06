// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { HomePageHeader } from '../components/HomePageHeader';
import { MainProblemLayout } from '../components/MainProblemLayout';
import { ExternalLogoRow } from '../components/ExternalLogoRow';
import { SellingProp } from '../components/SellingProp';
import { dynamicI18n } from '../components/DynamicTrans';

const DecoShapes = () => (
  <>
    <div className="top-deco-shape top-deco-shape--one" />
    <div className="top-deco-shape top-deco-shape--two" />
  </>
);

const IndexPage = (props: Props) => {
  const t = dynamicI18n(props.i18n);
  const { title, entries } = props.data.page;
  return (
    <main className="position-relative overflow-hidden">
      {!!title && (
        <Helmet>
          <title>{`Ledgy: ${t(title)}`}</title>
        </Helmet>
      )}
      <DecoShapes />
      <HomePageHeader {...props} />

      {entries.map(({ __typename, id, ...entry }, index) => {
        const { prefix } = props;

        if (index === 0) {
          return <MainProblemLayout key={id} {...entry} />;
        }
        if (__typename === 'ContentfulExternalLogos') {
          return <ExternalLogoRow key={id} {...entry} />;
        }
        if (__typename === 'ContentfulSellingProposition') {
          return <SellingProp key={id} {...entry} prefix={prefix} imgFirst={index % 2 === 0} />;
        }
        return null;
      })}
    </main>
  );
};

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    tablet: imageSharp(fluid: { originalName: { regex: "/tablet-dashboard.png/" } }) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    page: contentfulIndexPage(contentful_id: { eq: "jjbelvJa8nRqbGqYrr5wi" }) {
      title
      entries {
        ... on ContentfulExternalLogos {
          id
          title
          logos {
            title
            description
            localFile {
              childImageSharp {
                fixed(width: 120) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        ... on ContentfulSellingProposition {
          id
          title
          description
          link
          linkTo
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
