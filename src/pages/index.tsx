import React from "react";
import styled from "styled-components";

import content from "../content";

import "modern-css-reset";
import Timeline from "../components/Timeline";
import Section from "../components/Section";
import GradationText from "../components/GradationText";
import GlobalStyles from "../styles";
import Avatar from "../components/Avatar";
import SocialLinks from "../components/SocialLinks";
import IconChips from "../components/IconChips";

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
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  @media screen and (min-width: 20em) {
    width: 20em;
  }
  @media screen and (min-width: 30em) {
    width: 30em;
  }
  @media screen and (min-width: 40em) {
    width: 40em;
  }
`;

// Hero
const Hero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const H1 = styled.h1`
  text-align: center;
  font-size: 2.5em;
`;
const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const AvatarSizeLimiter = styled.div`
  max-width: 24em;
  width: 80%;
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

export default function MainPage(){
  return (
    <>
      <GlobalStyles />
      <Main>
        <Content>
          <title>I'm quietsato</title>
          <Hero>
            <H1>
              I'm <GradationText>quietsato</GradationText>!
            </H1>
            <AvatarContainer>
              <AvatarSizeLimiter>
                <Avatar rainbow={{ lightness: 50, saturation: 50 }} />
              </AvatarSizeLimiter>
            </AvatarContainer>
            <SocialLinksContainer>
              <SocialLinks links={content.socialLinks} />
            </SocialLinksContainer>
          </Hero>
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
