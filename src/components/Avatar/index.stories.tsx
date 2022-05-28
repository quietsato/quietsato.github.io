import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar, { Props } from ".";

export default {
  component: Avatar,
  title: "Avatar",
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: Props) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "#DCDFE4",
  backgroundColor: "#282C34",
};

export const TransparentBg = Template.bind({});
TransparentBg.args = {
  color: "#282c34",
  backgroundColor: "transparent",
};

export const Rainbow = Template.bind({});
Rainbow.args = {
  backgroundColor: "transparent",
  rainbow: {
    saturation: 50,
    lightness: 50,
  },
};
