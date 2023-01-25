import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hero, { Props } from "./Hero";

export default {
  component: Hero,
  title: "pages/Home/Hero",
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args: Props) => (
  <div
    style={{
      height: "100vh",
    }}
  >
    <Hero {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
