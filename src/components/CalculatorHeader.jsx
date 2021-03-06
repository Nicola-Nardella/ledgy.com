// @flow

import React from 'react';
import Img from 'gatsby-image';

import { calculatorUrl, track } from '../helpers';
import { ProductHuntButton } from './ProductHuntButton';
import { MainHeaderLayout } from './MainHeaderLayout';

export const CalculatorHeader = ({ data }: { data: any }) => {
  return (
    <MainHeaderLayout
      className="mb-5"
      title="The calculator you need if you’re raising capital"
      subtitle={
        <>
          <ul>
            <li>
              See <strong>who owns what</strong> after fundraising
            </li>
            <li>
              Look more professional during <strong>term sheet negotiations</strong>
            </li>
            <li>
              Understand common <strong>fundraising terms</strong>
            </li>
            <li>
              Model your cap table through <strong>multiple funding rounds</strong>
            </li>
            <li>
              Compare dilution results when adding <strong>convertible loans</strong> and
              <strong> employee pools</strong>
            </li>
          </ul>
        </>
      }
      buttonOne={{
        props: {
          href: calculatorUrl,
          onClick: () => track('click.calculator'),
          className: 'mr-2 mb-2',
        },
        text: 'Launch calculator',
      }}
      customButton={
        <ProductHuntButton
          productHuntLink="https://www.producthunt.com/posts/startup-fundraising-calculator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-startup-fundraising-calculator"
          trackSignupKey="clickProductHunt"
          postId="169181"
          altText="Startup Fundraising Calculator - The calculator you need if you're raising money. | Product Hunt Embed"
        />
      }
      image={<Img {...data.calculator} alt="Financing Round Calculator" />}
    />
  );
};
