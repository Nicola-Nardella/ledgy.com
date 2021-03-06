/* eslint-disable react/no-array-index-key */
// @flow

import React, { type Node } from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import { LedgyPricing } from '@ledgy/pricing/dist/LedgyPricing';

import { Button } from '../components/Button';
import { Title } from '../layouts/utils';
import { RequestDemoModal } from '../components/RequestDemoModal';
import { appUrl } from '../helpers';
import { PageHeader } from '../components/PageHeader';
import { DynamicTrans, dynamicI18n } from '../components/DynamicTrans';

const PricingCTA = ({ title, description }: {| title: Node, description: Node |}) => (
  <div className="col-12 col-lg-6 col-xl-4">
    <h5>{title}</h5>
    <p className="pb-5">{description}</p>
  </div>
);

export default withI18n()(({ i18n }: Props) => {
  const title = i18n.t`Pricing`;
  const t = dynamicI18n(i18n);
  const description = i18n.t`Companies at different stages have very different needs. Consider access rights, storage, support needs, and more when selecting your ideal plan.`;
  return (
    <>
      <Title title={title} description={description} />
      <PageHeader title={title} subtitle={description} />
      <LedgyPricing
        startupButton={
          <Button outline inverted className="my-4" href={`${appUrl}/signup`}>
            <Trans>Sign up</Trans>
          </Button>
        }
        premiumButton={
          <Button outline inverted className="mt-4 mb-1" href={`${appUrl}/signup`}>
            <Trans>Sign up</Trans>
          </Button>
        }
        premiumText="7-day free trial"
        enterpriseButton={<RequestDemoModal buttonClassName="my-4 btn-red" />}
        highlightEnterprise
        DynamicTrans={DynamicTrans}
        t={t}
      />
      <hr className="my-8" />
      <div className="container">
        <div className="row text-center justify-content-center my-7">
          <PricingCTA
            title={
              <>
                <Trans>Do you tackle the climate crisis?</Trans>{' '}
                <span role="img" aria-label="earth">
                  🌍
                </span>
              </>
            }
            description={
              <Trans>
                You get a 20% discount on Premium if your startup helps reduce carbon emissions.{' '}
                <a href="mailto:sales@ledgy.com?subject=Eco-Friendly Discount Application">
                  Tell us about your impact!
                </a>
              </Trans>
            }
          />
          <PricingCTA
            title={
              <>
                <Trans>Do you have less than €2m in funding?</Trans>{' '}
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </>
            }
            description={
              <Trans>
                Only pay half the price during your first year on Ledgy.{' '}
                <a href="mailto:sales@ledgy.com?subject=Startup Discount Application">
                  Send us a message
                </a>{' '}
                and you’ll receive a discount.
              </Trans>
            }
          />
          <PricingCTA
            title={
              <>
                <Trans>Are you crowdfunded?</Trans>{' '}
                <span role="img" aria-label="unicorn">
                  🦄
                </span>
              </>
            }
            description={
              <Trans>
                Pay much less if you have many non-voting stakeholders on your cap table.{' '}
                <a href="mailto:sales@ledgy.com?subject=Crowdfunded Startup on Ledgy">Contact us</a>{' '}
                to get a quote.
              </Trans>
            }
          />
        </div>
      </div>
    </>
  );
});

export const pageQuery = graphql`
  query {
    startupIcon: imageSharp(fluid: { originalName: { regex: "/startup-icon.png/" } }) {
      fixed(height: 80) {
        ...GatsbyImageSharpFixed
      }
    }
    scaleupIcon: imageSharp(fluid: { originalName: { regex: "/scaleup-icon.png/" } }) {
      fixed(height: 115) {
        ...GatsbyImageSharpFixed
      }
    }
    enterpriseIcon: imageSharp(fluid: { originalName: { regex: "/enterprise-icon.png/" } }) {
      fixed(height: 180) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
