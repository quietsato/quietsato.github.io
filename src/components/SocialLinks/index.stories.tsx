import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SocialLinks, { Props } from ".";

export default {
  component: SocialLinks,
  title: "SocialLinks",
} as ComponentMeta<typeof SocialLinks>;

const Template: ComponentStory<typeof SocialLinks> = (args: Props) => (
  <SocialLinks {...args}>
    <span>SocialLinks Contents</span>
  </SocialLinks>
);

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      site: "atcoder",
      username: "quietsato",
    },
    {
      site: "facebook",
      username: "quietsato",
    },
    {
      site: "github",
      username: "quietsato",
    },
    {
      site: "note",
      username: "quietsato",
    },
    {
      site: {
        sitename: "hogehoge",
      },
      username: "quietsato",
    },
  ],
};

export const ManyItems = Template.bind({});
ManyItems.args = {
  links: [...new Array(10)].map(() => {
    return {
      site: {
        sitename: "hogehoge",
      },
      username: "quietsato",
    };
  }),
};
