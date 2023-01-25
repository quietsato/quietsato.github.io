import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Avatar from ".";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Avatar",
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    color: "#DCDFE4",
    backgroundColor: "#282C34",
  },
};

export const TransparentBg: Story = {
  args: {
    color: "#282c34",
    backgroundColor: "transparent",
  },
};

export const Rainbow: Story = {
  args: {
    rainbow: {
      saturation: 50,
      lightness: 50,
    },
    backgroundColor: "transparent",
  },
};
