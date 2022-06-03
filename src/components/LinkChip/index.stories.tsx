import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LinkChip, { Props } from ".";

export default {
  component: LinkChip,
  title: "LinkChip",
} as ComponentMeta<typeof LinkChip>;

const Template: ComponentStory<typeof LinkChip> = (args: Props) => <LinkChip {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Link Text",
  url: "https://quietsato.github.io",
};

export const LongText = Template.bind({});
LongText.args = {
  text: "long long long long long long long long long long long long text",
  url: "https://quietsato.github.io",
};
