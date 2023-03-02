import React from "react";
import styled from "styled-components";

import content from "../content";

import "modern-css-reset/dist/reset.min.css";
import Timeline from "../components/Timeline";
import Section from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import IconChips from "../components/IconChips";
import { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";

////////////////////////////////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////////////////////////////////
// Global
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media screen and (min-width: 20rem) {
    width: 20rem;
  }
  @media screen and (min-width: 30rem) {
    width: 30rem;
  }
  @media screen and (min-width: 40rem) {
    width: 40rem;
  }
`;

// Hero
const LayoutHero = styled.section`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
`;
const SocialLinksContainer = styled.div`
  flex-grow: 1;
`;

// Footer
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>I'm quietsato</title>
      </Head>
      <Main>
        <LayoutHero>
          <Hero shrink />
        </LayoutHero>
        <Content>
          <SocialLinksContainer>
            <SocialLinks links={content.socialLinks} />
          </SocialLinksContainer>
          <Section title="I'm Using">
            <IconChips iconChipItems={content.using} />
          </Section>
          <Section title="I'm Interested in">
            <IconChips iconChipItems={content.interested} />
          </Section>
          <Section title="I Like">
            <IconChips iconChipItems={content.like} />
          </Section>
          <Section title="My Activities">
            <Timeline timelineItems={content.activities} />
          </Section>
        </Content>
      </Main>
      <Footer>
        <Content>&copy; 2022 quietsato</Content>
      </Footer>
    </>
  );
};

export default IndexPage;
