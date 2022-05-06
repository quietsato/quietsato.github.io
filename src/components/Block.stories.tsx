import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Block, { Props } from "./Block";

export default {
    component: Block,
    title: "Block",
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (args: Props) => <Block {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "Hello",
};
