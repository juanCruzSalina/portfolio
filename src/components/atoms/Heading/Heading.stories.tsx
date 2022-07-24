import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from './Heading';

export default {
  title: 'Components/Atoms/Heading',
  component: Heading
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}/>

export const Default = Template.bind({})
Default.args = {
  children: 'Example heading',
  size: 'md',
}