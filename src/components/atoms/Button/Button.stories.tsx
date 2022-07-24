import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'
import { faTShirt } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Components/Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Default = Template.bind({})
Default.args = {
  children: 'Test button'

}
export const WithIcon = Template.bind({})
WithIcon.args = {
  children: 'Icon button',
  icon: faTShirt
}