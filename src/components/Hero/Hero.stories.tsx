import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Hero from "./Hero";

const meta: Meta = {
  component: Hero,
  decorators: [(Story) => <Story />],
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    shrink: false,
  },
};
