import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GradationText from ".";

export default {
  component: GradationText,
  title: "GradationText",
} as ComponentMeta<typeof GradationText>;

const Wrapper: React.FC<{ text: string }> = ({ text }) => (
  <GradationText>
    <span style={{ fontSize: 36 }}>{text}</span>
  </GradationText>
);

const Template: ComponentStory<typeof Wrapper> = (args) => <Wrapper {...args} />;
export const Default = Template.bind({});
Default.args = {
  text: "Hello World",
};
