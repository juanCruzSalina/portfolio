import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Text from './Text'

export default {
  title: 'Components/Atoms/Text',
  component: Text
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}/>

export const Default = Template.bind({})
Default.args ={
  children: 'Example text',
  size: 'md'
}