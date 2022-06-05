import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconChips, { Props } from ".";
import { VscCode } from "react-icons/vsc";
import Section from "../Section";

export default {
  component: IconChips,
  title: "IconChips",
} as ComponentMeta<typeof IconChips>;

const items = [
  {
    text: "Text 01",
    icon: <VscCode />,
  },
  {
    text: "Text 02",
    icon: <VscCode />,
  },
  {
    text: "Text 03",
    icon: <VscCode />,
  },
  {
    text: "Text 04",
    icon: <VscCode />,
  },
  {
    text: "Text 05",
    icon: <VscCode />,
  },
  {
    text: "Text 06",
    icon: <VscCode />,
  },
];

const Template: ComponentStory<typeof IconChips> = (args: Props) => <IconChips {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconChipItems: items,
};

const SectionTemplate: ComponentStory<typeof IconChips> = (args: Props) => (
  <Section title="IconChips Section">
    <IconChips {...args} />
  </Section>
);

export const UseWithSection = SectionTemplate.bind({});
UseWithSection.args = {
  iconChipItems: items,
};
