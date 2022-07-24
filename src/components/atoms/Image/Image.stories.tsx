import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Image from './Image';

export default {
  title:'Components/Atoms/Image',
  component: Image
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args}/>

export const Default = Template.bind({})
Default.args = {
  src: 'https://www.clarin.com/img/2020/08/16/avatar-the-last-airbender-foto___pck4_8liS_1256x620__2.jpg#1597613994196',
  alt: 'avatar-alt',
  size: 'avatar'
}