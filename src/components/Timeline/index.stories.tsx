import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Timeline, { Props } from ".";

export default {
  component: Timeline,
  title: "Timeline",
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args: Props) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  timelineItems: [
    {
      title: "Lorem Ipsum",
      year: 2020,
      month: 3,
      description: "Description",
      links: [{ text: "Page", url: "https://quietsato.github.io" }],
    },
    {
      title: "Lorem Ipsum Without Description",
      year: 2021,
      month: 1,
    },
    {
      title: "Lorem Ipsum 02",
      year: 2021,
      month: 12,
      description: "Description",
    },
  ],
};
