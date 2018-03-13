// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import { FeatureLinks } from './Features';
import { Title } from '../layouts/utils';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title title={i18n.t`Consistency`} section={i18n.t`Features`} />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Guaranteed error-free</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2><Trans>Replace your Excel with Ledgy</Trans></h2>
              <p>
                <Trans>
                  Keep all the history to your company’s share register at a single place.
                  No more shuffling around with different documents shared via email, Dropbox,
                  Google Drive or Slack.<br />
                  Ledgy will be your single source of truth.
                  And it’s a damn good one!
                  <br /><br />
                  To get started simply enter all transactions from your share
                  register into Ledgy. This is a good opportunity to really understand
                  what has been going on in your cap table.<br /><br />
                  Need help? <Link href to={`${props.prefix}/contact`}>Contact us</Link> and
                  we will assist you to get started with Ledgy.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.createCaptable} alt="Create a cap table" />
              </div>
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4">
              <p>
                <Trans>
                  Ooops, there was an error in your share register?
                  Don’t worry, Ledgy will track everything you do and assist
                  you in getting your cap table straight.<br />
                  Once finished, sit back and relax. Now you can be assured that
                  your cap table is error-free!
                </Trans>
              </p>
            </div>

            <div className="col-md-8 ml-auto" data-aos="fade-left">
              <Img {...props.data.transactionError} alt="Transaction error checking" />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  Did you notice the number in the center bottom? Anytime you transfer
                  share from one shareholder to another, Ledgy will show you many
                  how many share that particular shareholder has <i>available</i> at
                  that given point in time.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
              <Img {...props.data.availableShares} alt="Available shares for transfer" />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  By the way if you decide to number your shares, we also got you covered.
                  Ledgy will track who owns which shares for each transaction
                  and assist you in entering valid share numbers.<br />
                  With Ledgy you can be sure that no single share number might is
                  missing or even assigned twice!
                </Trans>
              </p>
            </div>

            <div className="col-md-8" data-aos="fade-left">
              <Img {...props.data.shareNumberChecking} alt="Share number checking" />
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <header className="section-header text-left">
              <h1><Trans>Nice charts!</Trans></h1>
              <p>
                Finished? Go back to the “Cap Table” page
                and view the result.
                At any point in the history of your share register, Ledgy
                can draw you a nice diagram that represents the current equity
                distribution of your company.
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.captableBasic} alt="A basic cap table" />
              </div>
            </div>
          </div>

          <FeatureLinks {...props} page="consistency" />

        </div>
      </section>


    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageFragment = graphql`
  fragment ConsistencyPageFragment on RootQueryType {
    ...FeaturesFragment

    createCaptable: imageSharp(id: { regex: "/create-captable.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    transactionError: imageSharp(id: { regex: "/transaction-error.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    availableShares: imageSharp(id: { regex: "/available-shares.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    shareNumberChecking: imageSharp(id: { regex: "/share-number-checking.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    captableBasic: imageSharp(id: { regex: "/captable-basic.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
