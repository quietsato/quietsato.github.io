import React from "react";
import styled from "styled-components";
import { SocialLinkItem, SocialLinkSite } from "../../types";

import { VscAccount, VscLink } from "react-icons/vsc";
import { SiFacebook, SiGithub } from "react-icons/si";
import Card from "../Card";

////////////////////////////////////////////////////////////////////////////////
// Types
////////////////////////////////////////////////////////////////////////////////
export type Props = {
  links: SocialLinkItem[];
};

////////////////////////////////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////////////////////////////////
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 10em);
  justify-content: center;
  margin: 0 auto;
`;

const ListItem = styled.li`
  padding: 0;
`;

const Link = styled.a``;

const Wrapper = styled.div`
  justify-content: center;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 3em auto;
  grid-template-areas:
    "icon sitename"
    "icon username";
`;

const LinkIconArea = styled.div`
  grid-area: icon;
  display: flex;
  flex-grow: 1;
  align-items: center;
  font-size: 2em;
`;

const LinkSiteNameArea = styled.div`
  grid-area: sitename;
  text-align: center;
`;

const LinkUserNameArea = styled.div`
  grid-area: username;
  text-align: center;
`;

////////////////////////////////////////////////////////////////////////////////
// Private functions
////////////////////////////////////////////////////////////////////////////////
function generateLinkUrl(linkItem: SocialLinkItem): string | undefined {
  switch (linkItem.site) {
    case "atcoder":
      return `https://atcoder.jp/users/${linkItem.username}`;
    case "facebook":
      return `https://www.facebook.com/${linkItem.username}`;
    case "github":
      return `https://github.com/${linkItem.username}`;
    case "note":
      return `https://note.com/${linkItem.username}`;
    default:
      return undefined;
  }
}

function getSiteName(linkItem: SocialLinkItem): string {
  switch (linkItem.site) {
    case "atcoder":
      return "AtCoder";
    case "facebook":
      return "Facebook";
    case "github":
      return "GitHub";
    case "note":
      return "note";
    default:
      return linkItem.site.sitename;
  }
}

const LinkIcon: React.FC<{ site: SocialLinkSite }> = (props) => {
  switch (props.site) {
    case "facebook":
      return <SiFacebook />;
    case "github":
      return <SiGithub />;
    case "atcoder":
    case "note":
      return <VscLink />;
    default:
      return <VscAccount />;
  }
};

////////////////////////////////////////////////////////////////////////////////
// Exported component
////////////////////////////////////////////////////////////////////////////////
const Links: React.FC<Props> = (props) => {
  return (
    <List>
      {props.links.map((link, i) => (
        <ListItem key={i}>
          <Link href={generateLinkUrl(link)} target="_blank" rel="noreferrer noopener">
            <Card>
              <Wrapper>
                <LinkIconArea>
                  <LinkIcon {...link} />
                </LinkIconArea>
                <LinkSiteNameArea>{getSiteName(link)}</LinkSiteNameArea>
                <LinkUserNameArea>{link.username}</LinkUserNameArea>
              </Wrapper>
            </Card>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Links;
