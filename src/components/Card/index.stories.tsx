import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card, { Props } from ".";

export default {
  component: Card,
  title: "Card",
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: Props) => (
  <Card {...args}>
    <p>Card Content 1</p>
    <p>Card Content 2</p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};

const EmptyTemplate: ComponentStory<typeof Card> = (args: Props) => <Card {...args} />;
export const Empty = EmptyTemplate.bind({});
Empty.args = {};
