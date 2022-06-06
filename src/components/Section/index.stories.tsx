import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Section, { Props } from ".";

export default {
  component: Section,
  title: "Section",
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args: Props) => (
  <Section {...args}>
    <span>Section Contents</span>
  </Section>
);
export const Default = Template.bind({});
Default.args = {
  title: "Section Title",
};
