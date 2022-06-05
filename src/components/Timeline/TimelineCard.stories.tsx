import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TimelineCard, { Props } from "./TimelineCard";

export default {
  component: TimelineCard,
  title: "TimelineCard",
} as ComponentMeta<typeof TimelineCard>;

const Template: ComponentStory<typeof TimelineCard> = (args: Props) => <TimelineCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  year: 2022,
  month: 5,
  title: "Hello World",
  description: "Description",
  links: [
    { text: "Page 1", url: "https://quietsato.github.io" },
    { text: "Page 2", url: "https://quietsato.github.io" },
  ],
};

export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  year: 2022,
  month: 5,
  title: "Hello World Without Description",
};

export const ManyLinks = Template.bind({});
ManyLinks.args = {
  year: 2022,
  month: 5,
  title: "Many Links",
  description: "Description",
  links: [
    { text: "Page 1", url: "https://quietsato.github.io" },
    { text: "Page 2", url: "https://quietsato.github.io" },
    { text: "Page 3", url: "https://quietsato.github.io" },
    { text: "Page 4", url: "https://quietsato.github.io" },
    { text: "Page 5", url: "https://quietsato.github.io" },
    { text: "Page 6", url: "https://quietsato.github.io" },
    { text: "Page 7", url: "https://quietsato.github.io" },
    { text: "Page 8", url: "https://quietsato.github.io" },
    { text: "Page 9", url: "https://quietsato.github.io" },
    { text: "Page 10", url: "https://quietsato.github.io" },
  ],
};
